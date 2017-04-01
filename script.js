// Declaring all my vars
var kotoba, hinshi, yomigana, teigi;
var teigiContainer, defCount, extraCount, extraBoxes;
var entry, entries, finishBox;

entries = [];
extraCount = [];

var addEntryBtn, addDefBtn, resetDefBtn, copyBtn, zenKaiBtn;

addEntryBtn = document.getElementById('add-button');
addDefBtn = document.getElementById('add-teigi-button');
resetDefBtn = document.getElementById('reset-teigi-button');
copyBtn = document.getElementById('copy-button');
zenKaiBtn = document.getElementById('zenkai');

// Used as a shortcut for calling the teigi-cont div
teigiContainer = document.getElementById('teigi-cont');

// Used as a shortcut for calling the finish-box
// (where the formatted text is output to)
finishBox = document.getElementById('finish-box');


//  FUNCTIONS ######################################
//  ################################################
//  ################################################

// Keeps track of the number of definition boxes
defCount = 1;

// Allows one to add extra definition boxes and
// create definitions with ordered lists
function addTeigiBox() {
  defCount += 1;
  // Keeps track of the number of extra definitions
  extraCount = defCount - 1;

  var newBox = document.createElement('div');
  newBox.id = 'extra-box-' + extraCount;
  newBox.className = 'teigi-pad';
  newBox.innerHTML = "<textarea id='teigi-" + defCount + "' class='teigi-box' placeholder=' Definition'></textarea>";
  teigiContainer.appendChild(newBox);

}

function resetTeigi() {
  defCount = 1;

  while (teigiContainer.childNodes.length > 5) {
  teigiContainer.removeChild(teigiContainer.lastChild);
  }

}


// Assigns variables to the textfields so
// they can be parsed into output definitions
function getFields() {

  kotoba = document.getElementById('kotoba').value;
  yomigana = document.getElementById('yomigana').value;
  hinshi = document.getElementById('hinshi').value;

  // This IIFE checks whether to create a basic entry or ordered list entry
  // and returns the parsed defintion.
  (function() {
    if (defCount === 1) {
      teigi = '<br />\n' + document.getElementById('teigi-1').value;
    } else {
      var list = [];
      list.push('<ol>');
      // iterates through the teigi-boxes
      // wraps them in <li> tags
      for (i = 1; i <= defCount; i++) {
        list.push('<li>' + document.getElementById('teigi-' + i).value + '</li>');
      }
      list.push('</ol>');
      // joins <ol> and <li> tags and completes list
      teigi = list.join('\n');
    }
    return teigi;
  })();

  // This is a global var declared at the top of this file
  entry = { };

  // Here we assign the values from each field to the entry object,
  // and push it into the entries array.
  entry.kotoba = kotoba;
  entry.yomigana = yomigana;
  entry.hinshi = hinshi;
  entry.teigi = teigi;

  entries.push(entry);

} // end of getFields function



// Adds entries to the finish box.
function parseEntry() {
  if (entries.length !== 0 && finishBox.value !== '') {
    getFields();
    finishBox.value += '\n\n' + '<div>【' + kotoba + '】' + yomigana + ' 〔' + hinshi + '〕' + teigi + '</div>';
  } else {
    getFields();
    finishBox.value = '【' + kotoba + '】' + yomigana + ' 〔' + hinshi + '〕' + teigi;
  }
}

// Empties out the text from all fields
function clearFields() {
  document.getElementById('kotoba').value = '';
  document.getElementById('yomigana').value = '';
  document.getElementById('hinshi').value = '';
  for (i = 1; i <= defCount; i++) {
    document.getElementById("teigi-" + i).value = '';
  }

  // This removes all extra definition boxes
  while (teigiContainer.childNodes.length > 5) {
  teigiContainer.removeChild(teigiContainer.lastChild);
  }

  // Resets the counted number of definitions
  defCount = 1;
  // Resets the counted number of extra definitions
  extraCount = defCount - 1;
}

function zenKai() {
  finishBox.value = '';
  entries = [];
}

// Clipboard functionality is handled by Clipboard.js!
// https://clipboardjs.com/
function copyBox() {
  new Clipboard('#copy-button');
}


//  EVENT LISTENERS ################################
//  ################################################
//  ################################################


// Event listener for the main generator button
addEntryBtn.addEventListener('click',function(e) {
    buttonFlip(addEntryBtn);
    parseEntry();
    clearFields();
});

    // Adds keyboard shortcut event listener as
    // an alternative to clicking the 'add' button.
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.keyCode == 13) {
        addEntryBtn.click();
      }
    });

// Event listener for extra definition button
addDefBtn.addEventListener('click', function(e) {
   buttonGlow(addDefBtn);
   addTeigiBox();
 });

    // Adds keyboard shortcut event listener as
    // an alternative to clicking the 'add extra teigi' button.
    // (e) stands for "event" in the callback function
    document.addEventListener('keydown', function(e) {
     if (e.ctrlKey && e.keyCode == 191) {
       addDefBtn.click();
     }
    });

// Event listener for extra definition button
resetDefBtn.addEventListener('click', function(e) {
  buttonGlow(resetDefBtn);
  resetTeigi();
});

    // Adds keyboard shortcut event listener as
    // an alternative to clicking the 'add' button.
    document.addEventListener('keydown', function(e) {
      if (e.altKey && e.keyCode == 191) {
        resetDefBtn.click();
      }
    });


 // Event listeners for the copy to clipboard button
copyBtn.addEventListener('click', function(e) {
    buttonFlip(copyBtn);
    copyBox();
  });

    // Adds keyboard shortcut event listener as
    // an alternative to clicking the 'copy' button.
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.keyCode == 32) {
        copyBtn.click();
      }
    }, false);


// Event listener for clearing the finish box (final output at bottom)
zenKaiBtn.addEventListener('click', function() {
  buttonSpin(zenKaiBtn);
  zenKai();
});
