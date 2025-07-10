// QRCodeGenerator.js
import React, { useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import html2canvas from 'html2canvas';


const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const qrSectionRef = useRef();

  const downloadEntireSection = async () => {
    if (qrSectionRef.current) {
      const canvas = await html2canvas(qrSectionRef.current);
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sahitya-studio-qr.png';
      a.click();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Top Input Box */}
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h2>QR Code Generator</h2>
        <input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: '10px',
            width: '300px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>


      {text && (
        <>
          <div
            ref={qrSectionRef}
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >
            <h1 style={{ marginBottom: '20px',color:'blue' ,fontFamily:'Roboto' ,fontStyle:'italic'}}>SAHITHYA STUDIO</h1>
            <h5 style={{color:'orange',fontFamily: 'Roboto',fontSize: '22px'}}>@Guru Photography</h5>
            <p>This is Exclusive digital Album</p>
            <p>Scan the QR and see the images and enjoy :)</p>

            <QRCodeCanvas
              value={text}
              size={256}
              level="H"
              includeMargin={true}
            />

            <p style={{ marginTop: '20px', fontSize: '18px' }}>
              contact: 📞 +91 70366 21905
            </p>
            <p style={{ marginTop: '20px', fontSize: '18px' }}>
              Email: 📧 gurudigitals1994@gmail.com
            </p>
            
          </div>

          <button
            onClick={downloadEntireSection}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Download QR with Details
          </button>
        </>
      )}
    </div>
  );
};

export default QRCodeGenerator;
