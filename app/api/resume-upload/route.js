// import { NextResponse } from 'next/server';
// import { connectDB } from '../../../lib/mongodb';
// import Resume from '@/lib/resumes';
// import formidable from 'formidable';


// export const config = {
//   api: {
//     bodyParser: false, // Disable body parsing to handle multipart/form-data
//   },
// };

// export async function POST(request) {
//   await connectDB(); 

//   const formData = await request.formData();
//   const files = formData.getAll('files');

//   if (files.length === 0) {
//     return NextResponse.json({ error: 'No files uploaded' }, { status: 400 });
//   }

//   try {
//    //save resummes to collection
//     for (const file of files) {
//       const newResume = new Resume({
//         filename: file.name,
//         mimetype: file.type,
//         size: file.size,
//       });
//       await newResume.save();
//     }

//     return NextResponse.json({ message: 'Resumes uploaded successfully' });
//   } catch (error) {
//     console.error('Database error:', error);
//     return NextResponse.json({ error: 'Failed to save resumes' }, { status: 500 });
//   }
// }
import { NextResponse } from 'next/server';
import { connectDB } from '../../../lib/mongodb';
import Resume from '@/lib/resumes';

export async function POST(request) {
  await connectDB();

  const formData = await request.formData();
  const files = formData.getAll('files');

  if (files.length === 0) {
    return NextResponse.json({ error: 'No files uploaded' }, { status: 400 });
  }

  try {
    // Save resumes to the collection
    for (const file of files) {
      const newResume = new Resume({
        filename: file.name,
        mimetype: file.type,
        size: file.size,
      });
      await newResume.save();
    }

    return NextResponse.json({ message: 'Resumes uploaded successfully' });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to save resumes' }, { status: 500 });
  }
}
