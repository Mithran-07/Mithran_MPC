import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Generate a unique filename while preserving extension
    const extension = file.name.split('.').pop() || 'jpg';
    const filename = `${uuidv4()}.${extension}`;
    
    // Setup paths for original and preview
    // In a real app, you would use sharp to resize/compress the preview, 
    // and upload both to S3/GCS. Here we just save locally.
    const uploadDirOriginal = path.join(process.cwd(), 'public/uploads/original');
    const uploadDirPreview = path.join(process.cwd(), 'public/uploads/preview');
    
    await mkdir(uploadDirOriginal, { recursive: true });
    await mkdir(uploadDirPreview, { recursive: true });

    const filePathOriginal = path.join(uploadDirOriginal, filename);
    const filePathPreview = path.join(uploadDirPreview, filename); // Mocking preview with same file

    await writeFile(filePathOriginal, buffer);
    await writeFile(filePathPreview, buffer);

    return NextResponse.json({ 
      originalUrl: `/uploads/original/${filename}`,
      previewUrl: `/uploads/preview/${filename}`
    });
    
  } catch (error) {
    console.error('[Upload Error]', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
