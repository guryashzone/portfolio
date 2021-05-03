const downloadBtn = document.getElementById('download-pdf');

downloadBtn.addEventListener('click', () => {
	const resume = document.getElementById('resume');
	console.log(resume)
	var opt = {
	  margin: 0,
	  filename: 'Guryash Singh - Resume.pdf',
	  image: { type: 'jpeg', quality: 0.98 },
	  html2canvas: { scale: 4 },
	  jsPDF: { format: 'a4', orientation: 'portrait' }
	};
	
	html2pdf(resume, opt);
})