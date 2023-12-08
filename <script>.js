<script>
    let slideshowRunning = false; // Adaugă o variabilă pentru a urmări starea slideshow-ului

    function startSlideShow() {
        if (!slideshowRunning) {
            document.getElementById('subtitlu3').style.display = 'none';
            document.getElementById('slide-show-container').style.display = 'block';

            const images = [
                '1.png',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
            ];
            let currentImageIndex = 0;

            function showNextImage() {
                if (!slideshowRunning) {
                    return; // Oprește slideshow-ul dacă slideshowRunning este setat pe false
                }

                document.getElementById('slide-show-container').innerHTML = `<img src="${images[currentImageIndex]}" alt="Slide ${currentImageIndex + 1}">`;
                currentImageIndex = (currentImageIndex + 1) % images.length;
                setTimeout(showNextImage, 3000);
            }

            slideshowRunning = true;
            showNextImage();
        }
        slideshowRunning = false;
    }
    
</script>