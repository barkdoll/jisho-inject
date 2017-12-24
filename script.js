// Declaring all my vars
var kotoba, hinshi, yomigana, teigi;
var teigiContainer, defCount, extraCount, extraBoxes;
var entries, finishBox;

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

// Counts number of definition boxes
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
function getEntry() {
  var entry = {
    kotoba: document.getElementById('kotoba').value,
    yomigana: document.getElementById('yomigana').value,
    hinshi: document.getElementById('hinshi').value,
    teigi: (function() {
      var definition;
      if (defCount === 1) {
        definition = document.getElementById('teigi-1').value;
      } else {
        var list = [];
        // iterates through the teigi-boxes
        // to create array
        for (i = 1; i <= defCount; i++) {
          list.push(document.getElementById('teigi-' + i).value);
        }
        definition = list;
      }
      return definition;
    })()
  } // entry
  entries.push(entry);
  return entry;
} // end getEntry()

function parseTeigi(def) {
  var teigiStr;
  if (Array.isArray(def)) {
    var list = [];
    list.push('<ol>');
    // iterates through the teigi-boxes
    // wraps them in <li> tags
    for (i = 1; i <= def.length; i++) {
      list.push('<li>' + document.getElementById('teigi-' + i).value + '</li>');
    }
    list.push('</ol>');
    // joins <ol> and <li> tags and completes list
    teigiStr = list.join('\n');
  } else {
    teigiStr = '<br />\n' + document.getElementById('teigi-1').value;
  }
  return teigiStr;
};

// Adds entries to the finish box.
function parseEntry() {
  var data = getEntry();
  if (entries.length !== 0 && finishBox.value !== '') {
    finishBox.value += '\n\n' + '<div>';
    finishBox.value += '【' + data.kotoba + '】' + data.yomigana;
    if (data.hinshi != '') {
      finishBox.value += ' 〔' + data.hinshi + '〕';
    }
    finishBox.value += parseTeigi(data.teigi) + '</div>';
  } else {
    finishBox.value += '【' + data.kotoba + '】' + data.yomigana;
    if (data.hinshi != '') {
      finishBox.value += ' 〔' + data.hinshi + '〕';
    }
    finishBox.value += parseTeigi(data.teigi);
  }
} // end parseEntry()


// Empty text from all fields
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
  document.getElementById('kotoba').focus();
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
