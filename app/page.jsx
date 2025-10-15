'use client'
import { useState } from 'react';
import Editor from '@/app/components/editor/Editor';

export default function Home() {
  const [code, setCode] = useState('// Write your code here');

  return (
    <div>
      <div className='p-10'>
        <Editor language="javascript" value={code} onChange={setCode} />
      </div>
    </div>
  );
}
