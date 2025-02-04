
function setFullHeight() {
    const vh = window.innerHeight * 0.01;  // Uzima visinu viewport-a u px
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  window.addEventListener('resize', setFullHeight);
  window.addEventListener('load', setFullHeight);




        const output = document.getElementById('output');
        let selectedWindow = null;
        let selectedLeftDiv = null;
        let selectedRightDiv = null;
      


        /*document.getElementById('dimensionForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const width = parseInt(document.getElementById('width').value);
            const height = parseInt(document.getElementById('height').value);

            if (width > 0 && height > 0) {


                const windowDiv = document.createElement('div');
                windowDiv.classList.add('generated-window');
                windowDiv.style.width = width + 'px';
                windowDiv.style.height = height + 'px';

                const newBox = document.createElement('div');
                newBox.classList.add('window_inner_line');

                wingCounter++;
                windowDiv.id = 'krilo' + wingCounter;
                idList.push(windowDiv.id);
                addRemoveListener(windowDiv);
                windowDiv.addEventListener('click', function () {
                    selectedDiv = windowDiv; // Postavi ovaj div kao selektovan
                });

              

                // Postavljanje početne pozicije
                windowDiv.style.left = ${(output.clientWidth - width) / 2}px;
                windowDiv.style.top = ${(output.clientHeight - height) / 2}px;

                // Dodavanje dimenzija
                const widthText = document.createElement('div');
                widthText.classList.add('dimensions', 'width-dimension');
                widthText.textContent = ${width} cm;

                const heightText = document.createElement('div');
                heightText.classList.add('dimensions', 'height-dimension');
                heightText.textContent = ${height} cm;

                windowDiv.appendChild(widthText);
                windowDiv.appendChild(heightText);
                

                // Dodavanje mogućnosti za selekciju
                windowDiv.addEventListener('click', function(e) {
                    e.stopPropagation();
                    deselectWindows();
                    windowDiv.classList.add('selected');
                    selectedWindow = windowDiv;
                }); 
              
                

                // Dodavanje mogućnosti za pomeranje
                windowDiv.addEventListener('mousedown', function(e) {
                    let offsetX = e.clientX - windowDiv.offsetLeft;
                    let offsetY = e.clientY - windowDiv.offsetTop;

                    function moveAt(event) {
                        const minX = 0;
                        const maxX = output.clientWidth - windowDiv.offsetWidth;
                        const minY = 0;
                        const maxY = output.clientHeight - windowDiv.offsetHeight;

                        let newX = event.clientX - offsetX;
                        let newY = event.clientY - offsetY;

                        if (newX < minX) newX = minX;
                        if (newX > maxX) newX = maxX;
                        if (newY < minY) newY = minY;
                        if (newY > maxY) newY = maxY;

                        windowDiv.style.left = ${newX}px;
                        windowDiv.style.top = ${newY}px;
                    }

                    function stopMove() {
                        document.removeEventListener('mousemove', moveAt);
                        document.removeEventListener('mouseup', stopMove);
                    }

                    document.addEventListener('mousemove', moveAt);
                    document.addEventListener('mouseup', stopMove);
                });

                output.appendChild(windowDiv);
                windowDiv.appendChild(newBox);
            }
        })*/
            function taca(event) {
                // Ako korisnik dodirne input, textarea ili select, ne prebacujemo u click
                if (event.target.tagName === "INPUT" || 
                    event.target.tagName === "TEXTAREA" || 
                    event.target.tagName === "SELECT") {
                    return;
                }
            
                event.preventDefault(); // Sprečava neželjene efekte (npr. skrolovanje)
            
                let clickEvent = new MouseEvent("click", {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
            
                event.target.dispatchEvent(clickEvent);
            }
            
            // Dodaj listener na document
            document.addEventListener("touchstart", taca, { passive: false });
            

        // Kreiranje novog prozora
        document.getElementById('dimensionForm').addEventListener('submit', function(event) {
            event.preventDefault();
        
            const width = parseInt(document.getElementById('width').value);
            const height = parseInt(document.getElementById('height').value);
        
            if (width > 0 && height > 0) {
                const windowDiv = document.createElement('div');
                windowDiv.classList.add('generated-window');
                windowDiv.style.width = width + 'px';
                windowDiv.style.height = height + 'px';
        
                const newBox = document.createElement('div');
                newBox.classList.add('window_inner_line');
        
                wingCounter++;
                windowDiv.id = 'krilo' + wingCounter;
                idList.push(windowDiv.id);
                addRemoveListener(windowDiv);
        
                windowDiv.addEventListener('click', function () {
                    selectedDiv = windowDiv; // Postavi ovaj div kao selektovan
                });
        
                // Postavljanje početne pozicije
                windowDiv.style.left = `${(output.clientWidth - width) / 2}px`;
                windowDiv.style.top = `${(output.clientHeight - height) / 2}px`;
        
                // Dodavanje dimenzija
                const widthText = document.createElement('div');
                widthText.classList.add('dimensions', 'width-dimension');
                widthText.textContent = `${width} cm`;
        
                const heightText = document.createElement('div');
                heightText.classList.add('dimensions', 'height-dimension');
                heightText.textContent = `${height} cm`;
        
                windowDiv.appendChild(widthText);
                windowDiv.appendChild(heightText);
        
                // Dodavanje mogućnosti za selekciju
                windowDiv.addEventListener('click', function(e) {
                    e.stopPropagation();
                    deselectWindows();
                    windowDiv.classList.add('selected');
                    selectedWindow = windowDiv;
                });
        
                // Funkcija za pomeranje elemenata (računar + telefon)
                function startMove(e) {
                    e.preventDefault(); // Sprečava nepoželjno skrolovanje na mobilnim uređajima
        
                    let clientX = e.clientX || e.touches[0].clientX;
                    let clientY = e.clientY || e.touches[0].clientY;
        
                    let offsetX = clientX - windowDiv.offsetLeft;
                    let offsetY = clientY - windowDiv.offsetTop;
        
                    function moveAt(event) {
                        let clientX = event.clientX || event.touches[0].clientX;
                        let clientY = event.clientY || event.touches[0].clientY;
        
                        const minX = 0;
                        const maxX = output.clientWidth - windowDiv.offsetWidth;
                        const minY = 0;
                        const maxY = output.clientHeight - windowDiv.offsetHeight;
        
                        let newX = clientX - offsetX;
                        let newY = clientY - offsetY;
        
                        if (newX < minX) newX = minX;
                        if (newX > maxX) newX = maxX;
                        if (newY < minY) newY = minY;
                        if (newY > maxY) newY = maxY;
        
                        windowDiv.style.left = `${newX}px`;
                        windowDiv.style.top = `${newY}px`;
                    }
        
                    function stopMove() {
                        document.removeEventListener('mousemove', moveAt);
                        document.removeEventListener('mouseup', stopMove);
                        document.removeEventListener('touchmove', moveAt);
                        document.removeEventListener('touchend', stopMove);
                    }
        
                    document.addEventListener('mousemove', moveAt);
                    document.addEventListener('mouseup', stopMove);
                    document.addEventListener('touchmove', moveAt, { passive: false });
                    document.addEventListener('touchend', stopMove);
                }
        
                // Dodaj event listenere za pomeranje na računarima i telefonima
                windowDiv.addEventListener('mousedown', startMove);
                windowDiv.addEventListener('touchstart', startMove, { passive: false });
        
                output.appendChild(windowDiv);
                windowDiv.appendChild(newBox);
            }
        });
        


        // Deselektovanje svih prozora
        document.addEventListener('click', function() {
            deselectWindows();
        });

        function deselectWindows() {
            document.querySelectorAll('.generated-window, .inner-wing').forEach(win => win.classList.remove('selected'));
            selectedWindow = null;
            selectedLeftDiv = null;
            selectedRightDiv = null;
        }

        function addTBarFunctionality(div) {
            div.addEventListener('click', function(e) {
            e.stopPropagation();
            deselectWindows();
            div.classList.add('selected');
            selectedWindow = div;
    });
}


let idList = []; // Globalna lista za čuvanje ID-ova
let wingCounter = 0; // Brojač za generisanje jedinstvenih ID-ova
let addTBarClickCounter = 0;
let clickCounts = {};
let clickCountsFiks = {};
let clickCountsDoubleWing = {};
let selectedDiv = null;


document.getElementById('addTBar').addEventListener('click', function () {
    if (!selectedWindow) {
        alert("Morate selektovati prozor pre dodavanja T-prečke.");
        return;
    }
    addTBarClickCounter++;
    document.getElementById('brojacTprecke').textContent = addTBarClickCounter;

    const tPosition = parseInt(document.getElementById('tPosition').value);
    const tType = document.getElementById('tType').value;

    // Provera validnosti pozicije
    if ((tType === 'vertical' && tPosition >= selectedWindow.offsetWidth) || 
        (tType === 'horizontal' && tPosition >= selectedWindow.offsetHeight)) {
        alert("Pozicija T-prečke ne sme biti van granica prozora.");
        return;
    }

    // Kreiranje novih divova
    wingCounter++;
    const newLeftDiv = document.createElement('div');
    newLeftDiv.classList.add('inner-wing');
    newLeftDiv.id = 'krilo' + wingCounter;
    idList.push(newLeftDiv.id); // Dodavanje ID-a u listu automatski
    clickCounts[newLeftDiv.id] = 0;
    clickCountsFiks[newLeftDiv.id] = 0;
    clickCountsDoubleWing[newLeftDiv.id] = 0;

    wingCounter++;
    const newRightDiv = document.createElement('div');
    newRightDiv.classList.add('inner-wing');
    newRightDiv.id = 'krilo' + wingCounter;
    idList.push(newRightDiv.id); // Dodavanje ID-a u listu automatski
    clickCounts[newRightDiv.id] = 0;
    clickCountsFiks[newRightDiv.id] = 0;
    clickCountsDoubleWing[newRightDiv.id] = 0;


    newLeftDiv.addEventListener('click', function () {
        selectedDiv = newLeftDiv; // Postavi ovaj div kao selektovan
    });

    newRightDiv.addEventListener('click', function () {
        selectedDiv = newRightDiv; // Postavi ovaj div kao selektovan
    });

    const TBarDiv = document.createElement('div');
    TBarDiv.classList.add('TBar');
    const TBarDiv2 = document.createElement('div');
    TBarDiv2.classList.add('TBar2');
  
    document.body.appendChild(newLeftDiv);
    document.body.appendChild(newRightDiv);
    
    // Dodavanje event listener-a za uklanjanje i automatsko ažuriranje liste
    addRemoveListener(newLeftDiv);
    addRemoveListener(newRightDiv);

    // Ažuriranje prikaza liste ID-ova
    updateIdListDisplay();

    if (tType === 'vertical') {
        
         // Vertikalna prečka
        newLeftDiv.style.width = tPosition  + 'px';
        newLeftDiv.style.height = selectedWindow.offsetHeight + 'px';
        newLeftDiv.style.left = '0px';

        newRightDiv.style.width = (selectedWindow.offsetWidth - tPosition)  + 'px'; // OBRATI PAZNJU DESNO KRILO SE NE POKLAPA PA SE MENJALO RUCNO
        newRightDiv.style.height = selectedWindow.offsetHeight + 'px';
        newRightDiv.style.right = '0px';

        document.body.appendChild(TBarDiv);
        TBarDiv.style.width = '7px';
        TBarDiv.style.height = (selectedWindow.offsetHeight ) + 'px';
        TBarDiv.style.left = '0px';
        TBarDiv.style.transform = `translateX(${tPosition - 4.5}px)`;
       

        //ISPISIVANJE TEKSTA
       
        const leftDivWidth = tPosition;
        const leftDivWidthText = document.createElement('div');
        leftDivWidthText.classList.add('dimensions', 'wing-width-dimension');
        leftDivWidthText.textContent = `${leftDivWidth} cm`;
        newLeftDiv.appendChild(leftDivWidthText);
       
        const rightDivWidth = selectedWindow.offsetWidth - tPosition;
        const rightDivWidthText = document.createElement('div');
        rightDivWidthText.classList.add('dimensions', 'wing-width-dimension');
        rightDivWidthText.textContent = `${rightDivWidth} cm`;
        newRightDiv.appendChild(rightDivWidthText);

    } else if (tType === 'horizontal') {

         // Horizontalna prečka
         newLeftDiv.style.height = tPosition + 'px';
        newLeftDiv.style.width = selectedWindow.offsetWidth + 'px';
        newLeftDiv.style.top = '0px';

        newRightDiv.style.height = (selectedWindow.offsetHeight - tPosition) + 'px';
        newRightDiv.style.width = selectedWindow.offsetWidth + 'px';
        newRightDiv.style.top = tPosition + 'px';

        document.body.appendChild(TBarDiv2);
        TBarDiv2.style.height = '7px';
        TBarDiv2.style.width = (selectedWindow.offsetWidth ) + 'px';
        TBarDiv2.style.top = '0px';
        TBarDiv2.style.transform = `translateY(${tPosition - 4}px)`;

        //ISPISIVANJE TEKSTA
      
        const rightDivHeight = selectedWindow.offsetHeight - tPosition;
        const rightDivHeightText = document.createElement('div');
        rightDivHeightText.classList.add('dimensions', 'wing-height-dimension');
        rightDivHeightText.textContent = `${rightDivHeight} cm`;
        newRightDiv.appendChild(rightDivHeightText);
     
        const leftDivHeight = tPosition;
        const leftDivHeightText = document.createElement('div');
        leftDivHeightText.classList.add('dimensions', 'wing-height-dimension');
        leftDivHeightText.textContent = `${leftDivHeight} cm`;
        newLeftDiv.appendChild(leftDivHeightText);

    }

    // Dodaj event listener-e za selektovanje
    addTBarFunctionality(newLeftDiv);
    addTBarFunctionality(newRightDiv);

    // Dodaj nove divove u prozor
    selectedWindow.appendChild(newLeftDiv);
    selectedWindow.appendChild(newRightDiv);
    selectedWindow.appendChild(TBarDiv);
    selectedWindow.appendChild(TBarDiv2);

    const countDisplay = document.getElementById('countDisplay');
    countDisplay.textContent = `Broj elemenata: ${idList.length}`;
    

});



let selectedElement = null; // Trenutno selektovani element





// Dodavanje event listener-a za sve elemente koji mogu biti uklonjeni
document.querySelectorAll('.removable').forEach(div => {
    idList.push(div.id); // Dodajemo ID u listu
    addRemoveListener(div); // Dodajemo event listener za selekciju
});

const addTBarButton = document.getElementById('addTBar');
addTBarButton.addEventListener('click', function () {
    if (selectedElement) {
        // Uklanjanje elementa iz DOM-a
        const index = idList.indexOf(selectedElement.id);
        if (index > -1) {
            idList.splice(index, 1); // Uklanjanje iz liste ID-ova
        }
        
        selectedElement = null; // Reset selekcije

        // Ažuriranje prikaza ID-ova
        updateIdListDisplay();
    }
});

// Funkcija za promenu boje ID-a u listi
function updateIdColor(id, isSelected) {
    const idListContainer = document.getElementById('idListDisplay');
    const listItems = idListContainer.querySelectorAll('li');

    listItems.forEach(item => {
        if (item.textContent === id) {
            item.style.color = isSelected ? 'red' : ''; // Crvena boja za selektovane, vraćanje na podrazumevanu za ostale
        }
    });
}


function deselectWindows() {
    document.querySelectorAll('.generated-window, .inner-wing').forEach(win => win.classList.remove('selected'));
    selectedWindow = null;
}



//DODAVANJE KRILA POSLE T PRECKE
function updateWindowLines() {

    const selectedDivId = selectedDiv.id;
    if ((clickCountsFiks[selectedDivId] || 0) >= 1){ 
        clickCountsFiks[selectedDivId] = 0; 
    }
    if ((clickCountsDoubleWing[selectedDivId] || 0) >= 1){ 
        clickCountsDoubleWing[selectedDivId] = 0; 
    }
    let existingBox = selectedWindow.querySelector('#newBox');
                
                const newBox = document.createElement('div');
                newBox.classList.add('wing_inner_line');
                newBox.id = 'newBox';

                newBox.addEventListener('click', function (event) {
                    event.stopPropagation(); // Sprečava propagaciju događaja na roditeljske elemente
            
                    // Uklonite prethodni `selected` stil sa drugih elemenata
                    const allBoxes = document.querySelectorAll('.wing_inner_line');
                    allBoxes.forEach(box => {
                        box.style.backgroundColor = '#CDDBEB'; // Resetujte na osnovnu boju
                    });
            
                    // Postavite novu boju za selektovani `newBox`
                    this.style.backgroundColor = '#FFD700'; // Zlatna boja za selektovani element
                });

                 // Dodajte klik događaj na dokument da ukloni selekciju
                document.addEventListener('click', function () {
                    const allBoxes = document.querySelectorAll('.wing_inner_line');
                    allBoxes.forEach(box => {
                        box.style.backgroundColor = '#CDDBEB'; // Resetujte na osnovnu boju
                    });
                });

                
                
               // Dodaj unutrašnje linije
                selectedWindow.style.border = '0.5px solid black';
                selectedWindow.style.boxSizing = 'border-box';
                selectedWindow.style.backgroundColor = 'white';
               // selectedWindow.style.padding = '10%';

               // Smanji dimenzije za 2%
                //selectedWindow.style.transform = 'scale(0.96)';
               // selectedWindow.style.transformOrigin = 'center';
               // selectedWindow.style.transition = 'transform 0.3s'; // Animacija smanjenja     

               const currentWidth = selectedWindow.offsetWidth;
               const currentHeight = selectedWindow.offsetHeight;
               const currentLeft = parseInt(getComputedStyle(selectedWindow).left || 0, 10);
               const currentTop = parseInt(getComputedStyle(selectedWindow).top || 0, 10);

               // Postavljanje novih vrednosti
               selectedWindow.style.width = (currentWidth - 6) + 'px'; 
               selectedWindow.style.height = (currentHeight - 6) + 'px';
               selectedWindow.style.left = (currentLeft + 3) + 'px'; // Pomerite za +3 px desno ili -3 px levo
                selectedWindow.style.top = (currentTop + 3) + 'px';
                // Uklanjanje prethodno dodanih linija
                const existingLines = selectedWindow.querySelectorAll('.line');
                existingLines.forEach(line => line.remove());

                // Dimenzije selektovanog prozora
                const windowWidth = selectedWindow.offsetWidth;
                const windowHeight = selectedWindow.offsetHeight;

                if (document.getElementById('open-left').checked) {

                    // Prva linija 
                    const line1 = document.createElement('div');
                    line1.classList.add('line');
                    line1.style.width = Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight / 2, 2)) + 'px';
                    line1.style.transformOrigin = '0 0';
                    line1.style.transform = `rotate(${Math.atan2(windowHeight / 2, windowWidth) * (180 / Math.PI)}deg)`;
                    line1.style.top = '0';
                    line1.style.left = '0';
                    

                    // Druga linija 
                    const line2 = document.createElement('div');
                    line2.classList.add('line');
                    line2.style.width = Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight / 2, 2)) + 'px';
                    line2.style.transformOrigin = '100% 0';
                    line2.style.transform = `rotate(${-Math.atan2(windowHeight / 2, windowWidth) * (180 / Math.PI)}deg)`;
                    line2.style.top = '50%';
                    line2.style.right = '0';

                    selectedWindow.appendChild(line1);
                    selectedWindow.appendChild(line2);

                    newBox.style.backgroundColor = '#CDDBEB';

                } 
                
                if (document.getElementById('open-right').checked) {

                    // Prva linija 
                    const line3 = document.createElement('div');
                    line3.classList.add('line');
                    line3.style.width = Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight / 2, 2)) + 'px';
                    line3.style.transformOrigin = '100% 0';
                    line3.style.transform = `rotate(${Math.atan2(windowHeight / 2, windowWidth) * (180 / Math.PI)}deg)`;
                    line3.style.top = '100%';
                    line3.style.right = '0';

                    // Druga linija 
                    const line4 = document.createElement('div');
                    line4.classList.add('line');
                    line4.style.width = Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight / 2, 2)) + 'px';
                    line4.style.transformOrigin = '100% 0';
                    line4.style.transform = `rotate(${-Math.atan2(windowHeight / 2, windowWidth) * (180 / Math.PI)}deg)`;
                    line4.style.bottom = '100%';
                    line4.style.right = '0';

                    selectedWindow.appendChild(line3);
                    selectedWindow.appendChild(line4);

                    newBox.style.backgroundColor = '#CDDBEB';

                } 
                
                if (document.getElementById('Kipovanje').checked){

                    // Prva linija
                    const line5 = document.createElement('div');
                    line5.classList.add('line');
                    line5.style.width = Math.sqrt(Math.pow(windowWidth / 2, 2) + Math.pow(windowHeight, 2)) + 'px';  // Dijagonalna dužina
                    line5.style.transformOrigin =  '0 0';  // Poreklo iz donjeg levog ćoška
                    line5.style.transform = `rotate(${-Math.atan2(windowHeight, windowWidth / 2) * (180 / Math.PI)}deg)`;
                    line5.style.top = '100%';
                    line5.style.left = '0';

                    //Druga linija
                    const line6 = document.createElement('div');
                    line6.classList.add('line');
                    line6.style.width = Math.sqrt(Math.pow(windowWidth / 2, 2) + Math.pow(windowHeight, 2)) + 'px';  // Dijagonalna dužina
                    line6.style.transformOrigin = '0 0';  // Poreklo iz donjeg desnog ćoška
                    line6.style.transform = `rotate(${Math.atan2(windowHeight, windowWidth / 2) * (180 / Math.PI)}deg)`;
                    line6.style.bottom = '100%';
                    line6.style.left = '50%';

                    selectedWindow.appendChild(line5);
                    selectedWindow.appendChild(line6);

                    newBox.style.backgroundColor = '#CDDBEB';
                }
                selectedWindow.appendChild(newBox);

                
               
};


document.getElementById('openWindow').addEventListener('click', () => {
    if (!selectedDiv) {
        alert("Morate selektovati krilo pre nego što kliknete na dugme!");
        return;
    }
    
    const checkboxes = document.querySelectorAll('.checkbox-ios');
    let isChecked = false;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            isChecked = true;
        }
    });

    if (!isChecked) {
        alert("Morate označiti jedno otvaranje!");
        return;
    }


    const selectedDivId = selectedDiv.id;
    const currentClickCount = clickCounts[selectedDivId] || 0;
    const brojac = parseInt(document.getElementById('brojacTprecke').textContent, 10);

    // Provera broja klikova
  

    if (brojac === 0) {
            alert("TO JE TO");
                  
    }
    if (brojac > 0) {
           // Izvršite vašu funkciju (npr. updateWindowLines)
        updateWindowLines();     
    }
        

    // Ako nije kliknuto, povećajte broj klikova
    clickCounts[selectedDivId] = currentClickCount + 1;

    // Ažuriranje prikaza liste ID-ova
    updateIdListDisplay();


});

// Funkcija za onemogućavanje dugmadi na osnovu selektovanog `div` elementa
function disableButtons() {
    if (!selectedDiv) return;

    const selectedDivId = selectedDiv.id;

    // Provera broja klikova za selektovani `div`
    const currentClickCount = clickCounts[selectedDivId] || 0;
    const currentClickCountFiks = clickCountsFiks[selectedDivId] || 0;
    const currentClickCountDoubleWing = clickCountsDoubleWing[selectedDivId] || 0;

    // Onemogućavanje dugmadi
    document.getElementById('openWindow').disabled = currentClickCount >= 1;
    document.getElementById('addDoubleWing').disabled = currentClickCountDoubleWing >= 1 || currentClickCount >= 1;
    document.getElementById('addTBar').disabled = currentClickCount >= 1 || currentClickCountFiks >= 1 || currentClickCountDoubleWing >= 1;
    document.getElementById('fiks').disabled = currentClickCountFiks >= 1;
}

// Inicijalizacija MutationObserver-a
const observer = new MutationObserver(() => {
    // Kada se detektuje promena, pozovi funkciju za onemogućavanje dugmadi
    disableButtons();
});

// Funkcija za postavljanje MutationObserver-a na selektovani `div`
function observeSelectedDiv() {
    // Prekini posmatranje ako je prethodno bilo aktivno
    observer.disconnect();

    if (selectedDiv) {
        // Posmatraj promene na trenutno selektovanom `div` elementu
        observer.observe(selectedDiv, {
            attributes: true,   // Posmatraj promene atributa
            childList: true,    // Posmatraj dodavanje/uklanjanje potomaka
            subtree: true       // Posmatraj sve podređene elemente
        });

        // Pozovi `disableButtons` inicijalno da osveži stanje dugmadi
        disableButtons();
    }
}


// Dodavanje event listener-a za svaki div prilikom selektovanja
function addRemoveListener(divElement) {
    divElement.addEventListener('click', function () {
        // Ako je već selektovan, deselektujte ga
        if (selectedElement === divElement) {
            divElement.classList.remove('selected');
            selectedElement = null;
            document.getElementById('openWindow').disabled = true; 
            document.getElementById('fiks').disabled = true;
            document.getElementById('addDoubleWing').disabled = true;
            document.getElementById('addTbar').disabled = false; 
            
        } else {
            // Uklonite selekciju sa prethodnog elementa
            if (selectedElement) {
                selectedElement.classList.remove('selected');
                updateIdColor(selectedElement.id, false);
            }

            // Postavite novi selektovani element
            divElement.classList.add('selected');
            selectedElement = divElement;
            updateIdColor(selectedElement.id, true);

            observeSelectedDiv();
        }

        updateIdListDisplay();
    });
}

function updateIdListDisplay() {

    const idListContainer = document.getElementById('idListDisplay');
    idListContainer.innerHTML = ''; // Brišemo prethodni sadržaj liste

    // Kreiramo novu listu
    idList.forEach(id => {
        const listItem = document.createElement('li');
        listItem.textContent = id;
        idListContainer.appendChild(listItem);
    });
    idList.forEach(id => {
        const listItem = document.createElement('li');
        listItem.textContent = id;
        idListContainer.appendChild(listItem);
    });

    if (selectedElement) {
        updateIdColor(selectedElement.id, true);
    }
    
    const idListDisplay = document.getElementById('idListDisplay');
    const divElements = document.querySelectorAll('.inner-wing'); // Selektuje sve div elemente

    // Prolazak kroz sve elemente u idList i generisanje HTML-a
    idListDisplay.innerHTML = idList
    .map(id => {
        const otvaranjeKlikova = clickCounts[id] || 0; // Brojač za otvaranje
        const fiksKlikova = clickCountsFiks[id] || 0; // Brojač za fiks
        const DuploOtvaranjeKlikova = clickCountsDoubleWing[id] || 0;

        // Pronađite odgovarajući div sa klasom 'inner-wing' za svaki ID
        const div = Array.from(divElements).find(d => d.id === id); 
        const width = div ? div.offsetWidth : 0; // Širina div-a
        const height = div ? div.offsetHeight : 0; // Visina div-a

        return `<li>${id}: Otvaranje: ${otvaranjeKlikova}, Fiks: ${fiksKlikova}, Duplo: ${DuploOtvaranjeKlikova}, Širina: ${width}px, Visina: ${height}px</li>`;
    })
    .join('');

        localStorage.setItem('idList', JSON.stringify(idList));

        
}


               document.getElementById('addDoubleWing').addEventListener('click', () => {
                            if (!selectedWindow) {
                                alert("Morate selektovati krilo pre nego što kliknete na dugme!");
                                return;
                            }
                            
                            const selectedDivId = selectedDiv.id;
                            if ((clickCountsFiks[selectedDivId] || 0) >= 1){ 
                                clickCountsFiks[selectedDivId] = 0; 
                            }
                            if ((clickCounts[selectedDivId] || 0) >= 1){ 
                                clickCounts[selectedDivId] = 0;
                            }

                            const wingDouble = parseInt(document.getElementById('wingDouble').value);
                            const wingDoubleType = document.getElementById('wingDoubleType').value;

                            // Provera validnosti pozicije
                            if ((wingDoubleType === 'Levo' && wingDouble >= selectedWindow.offsetWidth) || 
                                (wingDoubleType === 'Desno' && wingDouble >= selectedWindow.offsetWidth)) {
                                alert("Sirina krila mora biti manja");
                                return;
                            }

                            const windowWidth = selectedWindow.offsetWidth;
                            const windowHeight = selectedWindow.offsetHeight;

                            const newLeftWing = document.createElement('div');
                            newLeftWing.classList.add('inner-wing');

                            const newRightWing = document.createElement('div');
                            newRightWing.classList.add('inner-wing');

                            newLeftWing.addEventListener('click', function () {
                                selectedDiv = newLeftWing; // Postavi ovaj div kao selektovan
                            });

                            newRightWing.addEventListener('click', function () {
                                selectedDiv = newRightWing; // Postavi ovaj div kao selektovan
                            });

                           /* let existingBox1 = selectedWindow.querySelector('#newBox1');
                            let existingBox2 = selectedWindow.querySelector('#newBox2'); */
                
                            const newBox1 = document.createElement('div');
                            newBox1.classList.add('wing_inner_line');
                            newBox1.style.left = '20px';

                            const newBox2 = document.createElement('div');
                            newBox2.classList.add('wing_inner_line');
                            newBox2.style.right = '20px';  

                            document.body.appendChild(newLeftWing);
                            document.body.appendChild(newRightWing);
                            

                            if(wingDoubleType === 'Levo'){

                                newLeftWing.style.width = (wingDouble - 3)  + 'px';
                                newLeftWing.style.height = (selectedWindow.offsetHeight - 6) + 'px';
                                newLeftWing.style.left = '3px';
                                newLeftWing.style.border = '0.5px solid black';
                                newLeftWing.style.boxSizing = 'border-box';
                                newLeftWing.style.backgroundColor = 'white';
                              

                                newRightWing.style.width = (selectedWindow.offsetWidth - wingDouble - 3)  + 'px'; // OBRATI PAZNJU DESNO KRILO SE NE POKLAPA PA SE MENJALO RUCNO
                                newRightWing.style.height = (selectedWindow.offsetHeight - 6)+ 'px';
                                newRightWing.style.right = '3px';
                                newRightWing.style.border = '0.5px solid black';
                                newRightWing.style.boxSizing = 'border-box';
                                newRightWing.style.backgroundColor = 'white';

                                leftWingWidth = newLeftWing.offsetWidth;
                                leftWingHeight = newLeftWing.offsetHeight;
                                rightWingWidth = newRightWing.offsetWidth;
                                rightWingHeight = newRightWing.offsetHeight;

                                const line1 = document.createElement('div');
                                line1.classList.add('line');
                                line1.style.width = Math.sqrt(Math.pow(leftWingWidth, 2) + Math.pow(leftWingHeight / 2, 2)) + 'px';
                                line1.style.transformOrigin = '0 0';
                                line1.style.transform = `rotate(${Math.atan2(windowHeight / 2, leftWingWidth) * (180 / Math.PI)}deg)`;
                                line1.style.top = '3px';
                                line1.style.left = '3px';
                                
                                
                                const line2 = document.createElement('div');
                                line2.classList.add('line');
                                line2.style.width = Math.sqrt(Math.pow(leftWingWidth - 3, 2) + Math.pow(windowHeight / 2, 2)) + 'px';
                                line2.style.transformOrigin = '0 0';
                                line2.style.transform = `rotate(${-Math.atan2(leftWingHeight / 2, leftWingWidth) * (180 / Math.PI)}deg)`;
                                line2.style.top = 'calc(100% - 3px)';
                                line2.style.bottom = '3px';
                                line2.style.left = '3px';

                                const line3 = document.createElement('div');
                                line3.classList.add('line');
                                line3.style.width = Math.sqrt(Math.pow(rightWingWidth, 2) + Math.pow(rightWingHeight / 2, 2)) + 'px';
                                line3.style.transformOrigin = '100% 0';
                                line3.style.transform = `rotate(${Math.atan2(rightWingHeight / 2, rightWingWidth) * (180 / Math.PI)}deg)`;
                                line3.style.top = 'calc(100% - 3px)';
                                line3.style.right = '3px';
            

                                const line4 = document.createElement('div');
                                line4.classList.add('line');
                                line4.style.width = Math.sqrt(Math.pow(rightWingWidth, 2) + Math.pow(rightWingHeight / 2, 2)) + 'px';
                                line4.style.transformOrigin = '100% 0';
                                line4.style.transform = `rotate(${-Math.atan2(rightWingHeight / 2, rightWingWidth) * (180 / Math.PI)}deg)`;
                                line4.style.bottom = 'calc(100% - 3px)';
                                line4.style.right = '3px';

                                const line5 = document.createElement('div');
                                line5.classList.add('line');
                                line5.style.width = Math.sqrt(Math.pow(leftWingWidth / 2, 2) + Math.pow(leftWingHeight, 2)) + 'px';  // Dijagonalna dužina
                                line5.style.transformOrigin =  '0 0';  // Poreklo iz donjeg levog ćoška
                                line5.style.transform = `rotate(${-Math.atan2(leftWingHeight, leftWingWidth / 2) * (180 / Math.PI)}deg)`;
                                line5.style.top = 'calc(100% - 3px)';
                                line5.style.left = '3px';


                                const line6 = document.createElement('div');
                                line6.classList.add('line');
                                line6.style.width = Math.sqrt(Math.pow(leftWingWidth / 2, 2) + Math.pow(leftWingHeight, 2)) + 'px';  // Dijagonalna dužina
                                line6.style.transformOrigin = '0 0';  // Poreklo iz donjeg desnog ćoška
                                line6.style.transform = `rotate(${Math.atan2(leftWingHeight, leftWingWidth / 2) * (180 / Math.PI)}deg)`;
                                line6.style.bottom = 'calc(100% - 3px)';
                                line6.style.left = ((leftWingWidth/2)+3) + 'px';

                                const newBox1 = document.createElement('div');
                                newBox1.classList.add('wing_inner_line');
                                newBox1.style.left = '20px';
                               
    
                                const newBox2 = document.createElement('div');
                                newBox2.classList.add('wing_inner_line');
                                newBox2.style.right = '20px';  

                                selectedWindow.appendChild(newBox1);
                                selectedWindow.appendChild(newBox2);


                                selectedWindow.appendChild(line1);
                                selectedWindow.appendChild(line2);
                                selectedWindow.appendChild(line3);
                                selectedWindow.appendChild(line4);
                                selectedWindow.appendChild(line5);
                                selectedWindow.appendChild(line6);


                            }else if(wingDoubleType === 'Desno'){

                                newLeftWing.style.width = (selectedWindow.offsetWidth-wingDouble -3)  + 'px';
                                newLeftWing.style.height = (selectedWindow.offsetHeight - 6) + 'px';
                                newLeftWing.style.left = '3px';
                                newLeftWing.style.border = '0.5px solid black';
                                newLeftWing.style.boxSizing = 'border-box';
                                newLeftWing.style.backgroundColor = 'white';

                                newRightWing.style.width = (wingDouble - 3)  + 'px'; // OBRATI PAZNJU DESNO KRILO SE NE POKLAPA PA SE MENJALO RUCNO
                                newRightWing.style.height = (selectedWindow.offsetHeight - 6) + 'px';
                                newRightWing.style.right = '3px';
                                newRightWing.style.border = '0.5px solid black';
                                newRightWing.style.boxSizing = 'border-box';
                                newRightWing.style.backgroundColor = 'white';

                                leftWingWidth = newLeftWing.offsetWidth;
                                leftWingHeight = newLeftWing.offsetHeight;
                                rightWingWidth = newRightWing.offsetWidth;
                                rightWingHeight = newRightWing.offsetHeight;

                                const line1 = document.createElement('div');
                                line1.classList.add('line');
                                line1.style.width = Math.sqrt(Math.pow(leftWingWidth, 2) + Math.pow(leftWingHeight / 2, 2)) + 'px';
                                line1.style.transformOrigin = '0 0';
                                line1.style.transform = `rotate(${Math.atan2(windowHeight / 2, leftWingWidth) * (180 / Math.PI)}deg)`;
                                line1.style.top = '3px';
                                line1.style.left = '3px';
                                
                                const line2 = document.createElement('div');
                                line2.classList.add('line');
                                line2.style.width = Math.sqrt(Math.pow(leftWingWidth - 3, 2) + Math.pow(windowHeight / 2, 2)) + 'px';
                                line2.style.transformOrigin = '0 0';
                                line2.style.transform = `rotate(${-Math.atan2(leftWingHeight / 2, leftWingWidth+3) * (180 / Math.PI)}deg)`;
                                line2.style.top = 'calc(100% - 3px)';
                                line2.style.left = '3px';

                                const line3 = document.createElement('div');
                                line3.classList.add('line');
                                line3.style.width = Math.sqrt(Math.pow(rightWingWidth, 2) + Math.pow(rightWingHeight / 2, 2)) + 'px';
                                line3.style.transformOrigin = '100% 0';
                                line3.style.transform = `rotate(${Math.atan2(rightWingHeight / 2, rightWingWidth+3) * (180 / Math.PI)}deg)`;
                                line3.style.top = 'calc(100% - 3px)';
                                line3.style.right = '3px';
            

                                const line4 = document.createElement('div');
                                line4.classList.add('line');
                                line4.style.width = Math.sqrt(Math.pow(rightWingWidth, 2) + Math.pow(rightWingHeight / 2, 2)) + 'px';
                                line4.style.transformOrigin = '100% 0';
                                line4.style.transform = `rotate(${-Math.atan2(rightWingHeight / 2, rightWingWidth-3) * (180 / Math.PI)}deg)`;
                                line4.style.bottom = 'calc(100% - 4px)';
                                line4.style.right = '4px';

                                const line5 = document.createElement('div');
                                line5.classList.add('line');
                                line5.style.width = Math.sqrt(Math.pow(rightWingWidth / 2, 2) + Math.pow(rightWingHeight, 2)) + 'px';  // Dijagonalna dužina
                                line5.style.transformOrigin =  '0 0';  // Poreklo iz donjeg levog ćoška
                                line5.style.transform = `rotate(${-Math.atan2(rightWingHeight, rightWingWidth / 2) * (180 / Math.PI)}deg)`;
                                line5.style.top = 'calc(100% - 3px)';
                                line5.style.left = (leftWingWidth +3) + 'px';


                                const line6 = document.createElement('div');
                                line6.classList.add('line');
                                line6.style.width = Math.sqrt(Math.pow(rightWingWidth / 2, 2) + Math.pow(rightWingHeight, 2)) + 'px';  // Dijagonalna dužina
                                line6.style.transformOrigin = '0 0';  // Poreklo iz donjeg desnog ćoška
                                line6.style.transform = `rotate(${Math.atan2(rightWingHeight, rightWingWidth / 2) * (180 / Math.PI)}deg)`;
                                line6.style.top = '3px';
                                line6.style.left = ((rightWingWidth/2) + leftWingWidth + 3) + 'px';

            

                                selectedWindow.appendChild(line1);
                                selectedWindow.appendChild(line2);
                                selectedWindow.appendChild(line3);
                                selectedWindow.appendChild(line4);
                                selectedWindow.appendChild(line5);
                                selectedWindow.appendChild(line6);


                            }

                            selectedWindow.appendChild(newLeftWing);
                            selectedWindow.appendChild(newRightWing);

                            const selectedDivIdDoubleWing = selectedDiv.id;
                            const currentClickCountDoubleWing = clickCountsDoubleWing[selectedDivIdDoubleWing] || 0;
                        
                            // Ako nije kliknuto, povećajte broj klikova
                            clickCountsDoubleWing[selectedDivIdDoubleWing] = currentClickCountDoubleWing + 1;
                       
                            updateIdListDisplay();

                            
                        });


const windowContainers = document.querySelectorAll('.inner-wing');

// Iteriraj kroz svaki div
windowContainers.forEach((container) => {
  // Inicijalizuj brojač za svaki div
  let brojac = 0;

  // Pronađi dugme i span za trenutni div
  const openWindowButton = container.querySelector('.openWindow');
  const brojacDisplay = container.querySelector('.brojac');

  // Dodaj event listener za dugme
  openWindowButton.addEventListener('click', () => {
    brojac++; // Povećaj brojač
    brojacDisplay.textContent = brojac; // Ažuriraj prikaz broja klikova
  });
});

//FIKS
function crtajLinijeZaFiks() {
    if (!selectedWindow) return;

            let div = selectedWindow.querySelector('#newBox');  // Pomoću ID-a tražimo element
            if (div) {
                div.remove();  // Ako postoji, brišemo ga
            }
            const selectedDivId = selectedDiv.id;
            if ((clickCounts[selectedDivId] || 0) >= 1){ 
                const currentWidth = selectedWindow.offsetWidth;
                const currentHeight = selectedWindow.offsetHeight;
                const currentLeft = parseInt(getComputedStyle(selectedWindow).left || 0, 10);
                        
                        // Postavljanje novih vrednosti
                selectedWindow.style.width = (currentWidth + 6) + 'px'; 
                selectedWindow.style.height = (currentHeight + 6) + 'px';
                selectedWindow.style.left = (currentLeft - 3) + 'px'; // Pomerite za +3 px desno ili -3 px levo
                clickCounts[selectedDivId] = 0;
               
        }
        if ((clickCountsDoubleWing[selectedDivId] || 0) >= 1){ 
            clickCountsDoubleWing[selectedDivId] = 0; 
        }
    selectedWindow.style.backgroundColor = '#CDDBEB';

    const existingLines = selectedWindow.querySelectorAll('.line');
    existingLines.forEach(line => line.remove());

    // Dimenzije selektovanog prozora
    const windowWidth = selectedWindow.offsetWidth;
    const windowHeight = selectedWindow.offsetHeight;

    // Crtanje dijagonalnih linija
    const line1 = document.createElement('div');
    line1.classList.add('line');
    line1.style.width = Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2))*0.4 + 'px';  // Dijagonalna dužina
    line1.style.transformOrigin =  '0 0';  // Poreklo iz donjeg levog ćoška
    line1.style.transform = `rotate(${Math.atan2(windowHeight, windowWidth) * (180 / Math.PI)}deg)`;
    line1.style.top = '30%';
    line1.style.left = '30%';

    const line2 = document.createElement('div');
    line2.classList.add('line');
    line2.style.width = Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2))*0.4 + 'px';  // Dijagonalna dužina
    line2.style.transformOrigin = '0 0';  // Poreklo iz donjeg desnog ćoška
    line2.style.transform = `rotate(${-Math.atan2(windowHeight, windowWidth) * (180 / Math.PI)}deg)`;
    line2.style.bottom = '28%';
    line2.style.left = '28%';

    selectedWindow.appendChild(line1);
    selectedWindow.appendChild(line2);
}

document.getElementById('fiks').addEventListener('click', function() {
    if (!selectedDiv) {
        alert("Morate selektovati krilo pre nego što kliknete na dugme!");
        return;
    }

    crtajLinijeZaFiks();

    const selectedDivIdFiks = selectedDiv.id;
    const currentClickCountFiks = clickCountsFiks[selectedDivIdFiks] || 0;
    clickCountsFiks[selectedDivIdFiks] = currentClickCountFiks + 1;

   

    // Ažurirajte prikaz liste ID-ova
    updateIdListDisplay();

   
});




document.getElementById('open-left').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('open-right').checked = false;
    }
});

document.getElementById('open-right').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('open-left').checked = false;
    }
});

document.getElementById('copyBtn').addEventListener('click', function () {
    setTimeout(() => {
        const content = document.getElementById('output');

        html2canvas(content, { scale: window.devicePixelRatio }).then(canvas => {
            const imageData = canvas.toDataURL('image/png'); // Konvertuje u base64

            try {
                // Dohvati trenutne screenshotove iz lokalnog skladišta
                const screenshots = JSON.parse(localStorage.getItem('screenshots')) || [];

                // Dodaj novi screenshot u niz
                screenshots.push({ image: imageData, text: '' });

                // Ažuriraj lokalno skladište
                localStorage.setItem('screenshots', JSON.stringify(screenshots));

                // Prebaci na stranicu za prikaz
                window.location.href = 'Prikaz.html';
            } catch (e) {
                alert("Lokalno skladište nije dostupno! Proverite podešavanja pregledača.");
            }
        });
    }, 500);
});

/*
  (function() {
    var removeSuccess;
  
    removeSuccess = function() {
      return $('.button').removeClass('success');
    };
  
    $(document).ready(function() {
      return $('.button').click(function() {
        $(this).addClass('success');
        return setTimeout(removeSuccess, 3000);
      });
    });
  
  }).call(this);


  // Selektovanje elemenata
const addImageButton = document.getElementById('addImageButton');
const imageInput = document.getElementById('imageInput');
const newBox = document.getElementById('newBox');

// Kada se klikne na dugme, otvori dijalog za odabir slike
addImageButton.addEventListener('click', () => {
  imageInput.click();
});

// Kada korisnik odabere sliku
imageInput.addEventListener('change', (event) => {
  const file = event.target.files[0]; // Uzmi prvu izabranu datoteku

  if (file) {
    console.log('Slika izabrana:', file);

    const reader = new FileReader();

    // Kada se slika učita
    reader.onload = (e) => {
      console.log('Slika uspešno učitana:', e.target.result);

      // Proveri da li već postoji slika u div-u
      if (!newBox.querySelector('img')) {
        const img = document.createElement('img');
        img.src = e.target.result; // Postavi izabranu sliku kao izvor
        img.alt = 'Izabrana slika';
        img.style.position = 'absolute'; // Postavljamo poziciju slike kao apsolutnu
        img.style.top = '0';
        img.style.left = '0';
        img.style.right = '0';
        img.style.bottom = '0';
        img.style.objectFit = 'contain'; // Ovaj stil pomaže da slika stane unutar div-a, bez da ga iskrivi
        newBox.appendChild(img);
      } else {
        alert('Slika je već dodata!');
      }
    };

    reader.onerror = (err) => {
      console.error('Greška pri učitavanju slike:', err);
    };

    reader.readAsDataURL(file); // Pretvori sliku u Base64 URL
  } else {
    console.log('Nema slike');
  }
});
*/

//SKRIVANJE TASTATURE I PRIKAZ MOJE NOVE



//ONEMOGUCAVANJE SELEKTOVANJE TEKSTOVA SLUCAJNO !!!!!!!!!!!!

document.addEventListener("mousedown", function (event) {
    if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
        event.preventDefault(); // Sprečava selektovanje samo izvan formi
    }
});


document.addEventListener("DOMContentLoaded", function () {
    function setupDropdown(dropdownId, inputId) {
        const dropdown = document.getElementById(dropdownId);
        const button = dropdown.querySelector(".select-button");
        const options = dropdown.querySelectorAll(".select-options div");
        const hiddenInput = document.getElementById(inputId);

        // Otvaranje/zatvaranje dropdown-a klikom
        button.addEventListener("click", function () {
            dropdown.classList.toggle("open");
        });

        // Kada se izabere opcija
        options.forEach(option => {
            option.addEventListener("click", function () {
                let selectedText = option.textContent;
                let selectedValue = option.getAttribute("data-value");

                button.textContent = selectedText; // Postavlja izabrani tekst
                button.setAttribute("data-value", selectedValue); // Postavlja vrednost u dugme
                hiddenInput.value = selectedValue; // Čuva vrednost u skrivenom input polju

                dropdown.classList.remove("open"); // Zatvara meni

                console.log("Izabrana vrednost:", hiddenInput.value); // Test prikaz u konzoli
            });
        });

        // Klik izvan dropdown-a zatvara meni
        document.addEventListener("click", function (e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("open");
            }
        });
    }

    // Postavljanje za sve dropdown menije
    setupDropdown("customSelect", "tType"); // Prvi dropdown
    setupDropdown("customSelectKrilo", "KriloVrataIliProzor"); // Drugi dropdown
    setupDropdown("customSelectWingDoubleType", "wingDoubleType"); // Treći dropdown
    setupDropdown("StakloOdabir", "StakloIliPanel"); // Cetvrti dropdown
    setupDropdown("kriloPrecka", "WingBarType"); // Peti dropdown
    setupDropdown("Roletna", "tRol"); // Sesti dropdown
    
});

document.addEventListener("DOMContentLoaded", function () {
    const trecaKolona = document.getElementById("treca-kolona");
    const showButton = document.getElementById("showTrecaKolona");
    const hideButton = document.getElementById("hideTrecaKolona");
    const gridContainer = document.getElementById("unos");

    // Klik na "Prikaži Treću Kolonu"
    showButton.addEventListener("click", function () {
        trecaKolona.style.display = "flex"; // Prikazuje treću kolonu
        showButton.style.display = "none";  // Sakriva dugme "Prikaži"
        hideButton.style.display = "block"; // Prikazuje dugme "Sakrij"

      
    });

    // Klik na "Sakrij Treću Kolonu"
    hideButton.addEventListener("click", function () {
        trecaKolona.style.display = "none"; // Sakriva kolonu
        hideButton.style.display = "none"; // Sakriva dugme "Sakrij"
        showButton.style.display = "block"; // Prikazuje dugme "Prikaži"

        
    });
});

// Prekrivanje globalnog alert-a
window.alert = function(message) {
    // Postavi poruku u modal
    document.getElementById("modalMessage").textContent = message;
    
    // Pokaži modal
    document.getElementById("customModal").style.display = "flex";
};

// Zatvaranje modala
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("customModal").style.display = "none";
});

// Zatvaranje modala klikom izvan modala
window.addEventListener("click", function(event) {
    const modal = document.getElementById("customModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

function change(showId, rowId) {
    // Svi div-ovi koje treba sakriti
    let allDivs = ['Btns-Fix', 'preckaKrilo', 'wingForm', 'window-container',  'Tprecka'];

    // Sakrij sve div-ove
    allDivs.forEach(div => {
        document.getElementById(div).style.display = 'none';
    });

    // Prikaži samo odabrani div
    document.getElementById(showId).style.display = 'block';

    // Ukloni aktivnu klasu sa svih row-ova
    document.querySelectorAll('[id^=row]').forEach(row => {
        row.classList.remove('active-row');
    });

    // Dodaj aktivnu klasu samo na kliknuti row
    document.getElementById(rowId).classList.add('active-row');
}
window.onload = function() {
    change('Tprecka', 'row1');
};





