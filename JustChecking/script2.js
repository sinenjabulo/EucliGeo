//****************************** GEOGEBRA API *************************************
document.addEventListener("DOMContentLoaded", function() {
           
    //original diagram
    var parameters = {
        "width": 1000,
        "height": 500,
        "showToolBar": false,
        "borderColor": null,
        "showMenuBar": false,
        "showAlgebraInput": false,
        "showResetIcon": false,
        "enableLabelDrags": false,
        "enableShiftDragZoom": true,
        "enableRightClick": false,
        "capturingThreshold": null,
        "showToolBarHelp": true,
        "errorDialogsActive": true,
        "useBrowserForJS": false,
        "material_id": "ajphgugd"
    };
    
     var applet = new GGBApplet(parameters, true);
    applet.inject('ggb-element');

    //diagram after Q1
    var parameters1 = {
        "width": 900,
        "height": 500,
        "showToolBar": false,
        "borderColor": null,
        "showMenuBar": false,
        "showAlgebraInput": false,
        "showResetIcon": true,
        "enableLabelDrags": false,
        "enableShiftDragZoom": true,
        "enableRightClick": false,
        "capturingThreshold": null,
        "showToolBarHelp": true,
        "errorDialogsActive": true,
        "useBrowserForJS": false,
        "material_id": "ds678qjm"
    };

    var applet1 = new GGBApplet(parameters1, true);
    applet1.inject('ggb-element-1');

    //diagram for 2
    var parameters2 = {
        "width": 1500,
        "height": 500,
        "showToolBar": true,
        "borderColor": null,
        "showMenuBar": true,
        "showAlgebraInput": false,
        "showResetIcon": true,
        "enableLabelDrags": false,
        "enableShiftDragZoom": true,
        "enableRightClick": false,
        "capturingThreshold": null,
        "showToolBarHelp": true,
        "errorDialogsActive": true,
        "useBrowserForJS": false,
        "material_id": "meuj7fnh"
    };

    var applet2 = new GGBApplet(parameters2, true);
    applet2.inject('ggb-element-2');
   

    //subdiagrams for 10.1 diagram1: "kvcbezpp" ggb-element-diagram1

    var parametersD1 = {
        "width": 400,
        "height": 350,
        "showToolBar": false,
        "borderColor": null,
        "showMenuBar": false,
        "showAlgebraInput": false,
        "showResetIcon": false,
        "enableLabelDrags": false,
        "enableShiftDragZoom": true,
        "enableRightClick": true,
        "capturingThreshold": null,
        "showToolBarHelp": true,
        "errorDialogsActive": true,
        "useBrowserForJS": false,
        "material_id": "uwvjzh8g"
    };
    var appletD1 = new GGBApplet(parametersD1,true);
    appletD1.inject('ggb-element-diagram1');

    //subdiagram 2 : beqpufqc 
    var parametersD2 = {
        "width": 400,
        "height": 350,
        "showToolBar": false,
        "borderColor": null,
        "showMenuBar": false,
        "showAlgebraInput": false,
        "showResetIcon": false,
        "enableLabelDrags": false,
        "enableShiftDragZoom": true,
        "enableRightClick": false,
        "capturingThreshold": null,
        "showToolBarHelp": true,
        "errorDialogsActive": true,
        "useBrowserForJS": false,
        "material_id": "beqpufqc"
    };
    var appletD2 = new GGBApplet(parametersD2,true);
    appletD2.inject('ggb-element-diagram2');
    
    //subdiagram 3 : beqpufqc 
    var parametersD3 = {
        "width": 550,
        "height": 450,
        "showToolBar": false,
        "borderColor": null,
        "showMenuBar": false,
        "showAlgebraInput": false,
        "showResetIcon": false,
        "enableLabelDrags": false,
        "enableShiftDragZoom": true,
        "enableRightClick": false,
        "capturingThreshold": null,
        "showToolBarHelp": true,
        "errorDialogsActive": true,
        "useBrowserForJS": false,
        "material_id": "puavtfnm"
    };
    var appletD3 = new GGBApplet(parametersD3,true);
    appletD3.inject('ggb-element-diagram3');

   /* //10.1 Conclusion : ds678qjm
    var parametersfinal = {
        "width": 800,
        "height": 450,
        "showToolBar": false,
        "borderColor": null,
        "showMenuBar": false,
        "showAlgebraInput": false,
        "showResetIcon": false,
        "enableLabelDrags": false,
        "enableShiftDragZoom": true,
        "enableRightClick": false,
        "capturingThreshold": null,
        "showToolBarHelp": true,
        "errorDialogsActive": true,
        "useBrowserForJS": false,
        "material_id": "ds678qjm"
    };
    var appletfinal = new GGBApplet(parametersfinal,true);
    appletfinal.inject('ggb-element-final');*/

    //10.2
    //subdiagram 3 : meuj7fnh 
    var parameters3 = {
        "width": 800,
        "height": 500,
        "showToolBar": false,
        "borderColor": null,
        "showMenuBar": false,
        "showAlgebraInput": false,
        "showResetIcon": false,
        "enableLabelDrags": false,
        "enableShiftDragZoom": true,
        "enableRightClick": false,
        "capturingThreshold": null,
        "showToolBarHelp": true,
        "errorDialogsActive": true,
        "useBrowserForJS": false,
        "material_id": "rghxbsz8"
    };
    var applet3 = new GGBApplet(parameters3,true);
    applet3.inject('ggb-element-3');

    //Triangle ASD : fnzhxqdg
    var parametersASD = {
        "width": 400,
        "height": 200,
        "showToolBar": false,
        "borderColor": null,
        "showMenuBar": false,
        "showAlgebraInput": false,
        "showResetIcon": false,
        "enableLabelDrags": false,
        "enableShiftDragZoom": true,
        "enableRightClick": false,
        "capturingThreshold": null,
        "showToolBarHelp": true,
        "errorDialogsActive": true,
        "useBrowserForJS": false,
        "material_id": "fnzhxqdg"
    };
    var appletASD = new GGBApplet(parametersASD,true);
    appletASD.inject('gg-element-ASD');

    //Triangle ACR :v73gk7tk
    var parametersACR = {
        "width": 400,
        "height": 300,
        "showToolBar": false,
        "borderColor": null,
        "showMenuBar": false,
        "showAlgebraInput": false,
        "showResetIcon": false,
        "enableLabelDrags": false,
        "enableShiftDragZoom": true,
        "enableRightClick": false,
        "capturingThreshold": null,
        "showToolBarHelp": true,
        "errorDialogsActive": true,
        "useBrowserForJS": false,
        "material_id": "v73gk7tk"
    };
    var appletACR = new GGBApplet(parametersACR,true);
    appletACR.inject('gg-element-ACR');

    //10.3 : original qzeqzmwr
    var parametersOrig3 = {
        "width": 800,
        "height": 500,
        "showToolBar": false,
        "borderColor": null,
        "showMenuBar": false,
        "showAlgebraInput": false,
        "showResetIcon": false,
        "enableLabelDrags": false,
        "enableShiftDragZoom": true,
        "enableRightClick": false,
        "capturingThreshold": null,
        "showToolBarHelp": true,
        "errorDialogsActive": true,
        "useBrowserForJS": false,
        "material_id": "qzeqzmwr"
    };
    var appletOrig3 = new GGBApplet(parametersOrig3,true);
    appletOrig3.inject('gg-element-Orig3');



    
});
function viewFinalD(){
    //conclusion diagram for q2 : tkurufvd
    var parametersfinalD = {
        "width": 800,
        "height": 500,
        "showToolBar": false,
        "borderColor": null,
        "showMenuBar": false,
        "showAlgebraInput": false,
        "showResetIcon": false,
        "enableLabelDrags": false,
        "enableShiftDragZoom": true,
        "enableRightClick": false,
        "capturingThreshold": null,
        "showToolBarHelp": true,
        "errorDialogsActive": true,
        "useBrowserForJS": false,
        "material_id": "tkurufvd"
    };

    var appletfinalD = new GGBApplet(parametersfinalD,true);
    

    if(document.getElementById("gg-element-final").style.display === "none"){
         // appletfinalD.inject('gg-element-finalD');
        appletfinalD.inject('gg-element-final');
        document.getElementById("gg-element-final").style.display = "block";
        this.textContent = "Hide Diagram";

    }
    else{
        document.getElementById("gg-element-final").style.display = "none";
        this.textContent = "Show Diagram"

    }

   

  

}



//*****************************************SOLVINGING.html********************************************* */
    //10.1
    // Interactive hints and feedback
var conclusions = "P1 = R2 [given] <br>";
    // Check angles in Diagram 1
function diagram1a() {
    var angle1 = document.getElementById("angle1");
    var angle2 = document.getElementById("angle2");
    var angle3 = document.getElementById("angle3");
    var feedback = "";

    let reasoning = document.getElementById("reasoning").value.toLowerCase();

 
    // Check if angle1 is checked and provide feedback
    if (angle1.checked) {
        if ((reasoning.includes("exterior") || reasoning.includes("ext")) && reasoning.includes("quad")) {
            feedback += "Correct! <br>S1 =  Q1 + Q2 [exterior angles of  cyclic quadrilateral].<br>";
            conclusions += feedback.replace("Correct!", "");
        } else {
            feedback += "For Angle Q1 + Q2, think about how exterior angles relate to cyclic quadrilaterals.<br>";
        }
    }

    // Check if angle2 is checked and provide feedback
    if (angle2.checked) {
        if ((reasoning.includes("exterior") || reasoning.includes("ext")) && reasoning.includes("quad")) {
            feedback += "SDCT is not a cyclic quadrilateral. You know why? Review the theorems tab.<br>";
        } 
        else{
            feedback += "Is there really a relationship between S1 and C2?"
        }

    }

    // Check if angle3 is checked and provide feedback
    if (angle3.checked) {
        feedback += "Is there D1 from diagram1?<br>";
    }

    // Display the feedback
    var feedbackElement = document.getElementById("angleFeedback")

    if (feedbackElement.style.display === "none") {
        feedbackElement.innerHTML = feedback;
        feedbackElement.style.display = "block";
        this.textContent = "Hide Feedback"; // Change button text
    } else {
        feedbackElement.style.display = "none"; // Hide the paragraph
        this.textContent = "Show Feedback"; // Reset button text
    }


   
}
function diagram1b(){
    var angle11 = document.getElementById("angle11");
    var angle22 = document.getElementById("angle22");
    var angle33 = document.getElementById("angle33");
    var feedback1 = "";

    let reasoning1 = document.getElementById("reasoning1").value.toLowerCase();
     // Check if angle11 is checked and provide feedback
     if (angle11.checked) {
        if ((reasoning1.includes("exterior") || reasoning1.includes("ext")) && reasoning1.includes("quad")) {
            feedback1 += "SDCT is not a cyclic quadrilateral. You know why? Review the theorems tab.<br>";
        } 
        else{
            feedback1 += "Is there really a relationship between S1 and D2?"
        }

    }

    // Check if angle22 is checked and provide feedback
    if (angle22.checked) {
        if ((reasoning1.includes("exterior") || reasoning1.includes("ext")) && ((reasoning1.includes("triangle") || reasoning1.includes("triangles")))) {
            feedback1 += "Correct! <br>T2 = R2 + Q2 [exterior angles of triangle].<br>";
            conclusions += feedback1.replace("Correct!", "");
        } else {
            feedback1 += "For Angle R2 + Q2, think about how exterior angles relate to triangles.<br>";
        }    
    }

    // Check if angle33 is checked and provide feedback
    if (angle33.checked) {
        if (reasoning1.includes("corresponding") || reasoning.includes("corr")) {
            feedback1 += "There are no parallel lines for this diagram<br>";
        } 
        else{
            feedback1 += "Incorrect, S2 is not equal to T2 in any way."
        }    }


    // Display the feedback
        var feedbackElement1 = document.getElementById("angleFeedback1")

        if (feedbackElement1.style.display === "none") {
            feedbackElement1.innerHTML = feedback1;
            feedbackElement1.style.display = "block";
            this.textContent = "Hide Feedback"; // Change button text
        } else {
            feedbackElement1.style.display = "none"; // Hide the paragraph
            this.textContent = "Show Feedback"; // Reset button text
        }

}

    // Check angles in Diagram 2
function diagram2(){
    var angle4 = document.getElementById("angle4");
    let angle5 = document.getElementById("angle5");
    let angle6 = document.getElementById("angle6");
    var feedback2 = "";
    let reasoning = document.getElementById("reasoning2").value.toLowerCase();


    //checking if the box is checked
    if (angle4.checked) {
        if (reasoning.includes("tan chord theorem") || reasoning.includes("tangent") || reasoning.includes("chord")) {
            feedback2 += "Correct! <br>P1 = Q1 [tan chord theorem].<br>";
            conclusions += feedback2.replace("Correct!", "");
        } else {
            feedback2 += "Incorrect! For Angle Q1, theorems that are related to tangents, look at your theorem table.<br>";
        }
    }
    if (angle5.checked) {
        feedback2 += "Incorect, S2 is not equal P1. <br> Look at it again.<br>";
    }
    if (angle6.checked) {
        feedback += "Incorrect, P2 is not equal P1 <br>Look at it again.<br>";
    }

    // Display the feedback
    var feedbackElement = document.getElementById("angleFeedback2")

    if (feedbackElement.style.display === "none") {
        feedbackElement.innerHTML = feedback2;
        feedbackElement.style.display = "block";
        this.textContent = "Hide Feedback"; // Change button text
    } else {
        feedbackElement.style.display = "none"; // Hide the paragraph
        this.textContent = "Show Feedback"; // Reset button text
    }
    
}
    
    // Check angles in Diagram 3
function diagram3(){
    var angle7 = document.getElementById("angle7");
    let angle8 = document.getElementById("angle8");
    let angle9 = document.getElementById("angle9");
    var feedback = "";
    let reasoning = document.getElementById("reasoning3").value.toLowerCase();


    //checking if the box is checked
    if (angle7.checked) {
        if (reasoning.includes("corresponding") || reasoning.includes("corr")) {
        feedback += "Incorrect! How do corresponding look? Review the Definitions.<br>";
    } else {
        feedback += "Is there really a relationship between T2 and S2? <br> Look at the diagram again.<br>";
    }
    }
    if (angle8.checked) {
        if (reasoning.includes("alternate") || reasoning.includes("alt") || reasoning.includes("alternating")) {
            feedback += "Correct! <br> T2 = C2 [alternating angles, CA || TS].<br>";
            conclusions += feedback.replace("Correct!", "");
        } else {
            feedback += "For Angle C2, what do you know about parallel lines with traversal lines that makes shape Z or N? <br> Look at the diagram again<br>";
    }        }
    if (angle9.checked) {
        feedback += "Does Q1 really have a relationship with P1?. <br> Look at the diagram again<br>";
    }

    // Display the feedback
    var feedbackElement = document.getElementById("angleFeedback3")

    if (feedbackElement.style.display === "none") {
        feedbackElement.innerHTML = feedback;
        feedbackElement.style.display = "block";
        this.textContent = "Hide Feedback"; // Change button text
    } else {
        feedbackElement.style.display = "none"; // Hide the paragraph
        this.textContent = "Show Feedback"; // Reset button text
    }
    
}
document.addEventListener("DOMContentLoaded", conclusion());

    // Check final conclusion
function conclusion() {
    let conclusion = conclusions //document.getElementById("combine1").value.toLowerCase().replace(/\s+/g, "");
    
    // Display the conclusion
    
    const conclusionElement = document.getElementById("conclusionFeedback");
    conclusion += "P1 = R1  means T2 = P1 + Q2 <br>" + 
                  "P1 = Q1  means S1 = P1 + Q2 <br>" + 
                  "Therefore S1 = T2 = P1 + Q2"

    if (conclusionElement.style.display === "none") {
        conclusionElement.innerHTML = conclusion;
        conclusionElement.style.display = "block";
        this.textContent = "Hide Conclusion"; // Change button text
    } else {
        conclusionElement.style.display = "none"; // Hide the paragraph
        this.textContent = "Show Conclusion"; // Reset button text
    }
}
        
      
//***************************************MATCHING KEYWORDS WITH THEOREMS********************************* */
//collect all the keywords picked by the user and return a list of them
function myKeywordsCheckList() {
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const chooseKeywordsElement = document.getElementById("choose-keywords");

    const checkedLabels = [];
  
    checkedBoxes.forEach(box => {
        const label = document.querySelector(`label[for="${box.id}"]`);
        if (label) {
            checkedLabels.push(label.textContent);
        } else {
            console.warn("Checkbox has no associated label.");
        }
    });
  
    console.log(checkedLabels); // Display the collected labels

    // Store the keywords in local storage
    sessionStorage.setItem("selectedKeywords", JSON.stringify(checkedLabels));
        chooseKeywordsElement.style.fontSize = "24px";
    
    if(checkedLabels.includes("Circle with center")){
        chooseKeywordsElement.innerHTML = "What is a center? Is there anything that includes a center in the statement or diagram?"
        chooseKeywordsElement.style.color = "red";
        checkedLabels.pop("Circle with center");
    }
    else if(checkedLabels.includes("Cyclic Quadrilateral") && checkedLabels.includes("Tangent") && checkedLabels.includes("Triangles") && checkedLabels.includes("Parallel Lines")){
        chooseKeywordsElement.innerHTML = "Correct, we can work with these keywords.";
        chooseKeywordsElement.style.color = "green";
    }
    else if(checkedLabels.length < 4){
        chooseKeywordsElement.innerHTML = "Is that all?."
        chooseKeywordsElement.style.color = "orange";

    }
    else{
        chooseKeywordsElement.innerHTML = "Are you sure?"
        chooseKeywordsElement.style.color = "red";

    }

    return checkedLabels;
}



// PATTERN RECOGNITION
//retrieves the keywords from storage, matches the keywords with their properties

function pattern_recognition() {
    const loadedKeywords = JSON.parse(sessionStorage.getItem("selectedKeywords")); // Retrieve keywords from sessionStorage
    const theorems = {
        // Theorems object remains the same...
        Tangent: [
            "Tangent perpendicular to a radius",
            "Tangent perpendicular to a diameter",
            "Tangents from the same point",
            "Tan chord theorem / Angle between tangent and a chord / Converse tan chord theorem"
        ],
        "Circle wihout center" : [
            "Angles at the circumference in the same segment",
            "Angles in the same segment",
            "Line subtedns equal angles / converse angles in the same segment",
            "Equal chords, equal angles",
    
        ],
    
        "Circle with center": [
            "Line from center to midpoint of chord",
            "Angle at center is twice angle at the circumference",
            "Angle in a semi-circle / chord subtends 90 / converse angles in the same segment",
            "Radius perpendicular to a tangent",
            "Isosceles triangle with radii",
            "Line perpendicular to a radius",
            "Line from center perpendicular to a chord"
        ],
        "Parallel Lines": [
            "Alternate angles are equal",
            "Corresponding angles are equal",
            "Co-interior angles add up to 180"
        ],
        Lines : [
            "Vertically opposite angles",
            "Angles on a straight line add up to 180",
            "Angles around a point / angles in a revolution"
        ],
        "Cyclic Quadrilateral": [
            "Opposite angles of a cyclic quadrilateral / Converse opposite angles of cyclic quad",
            "Exterior angle of cyclic quadrilateral / Converse exterior angles of cyclic quad",
            "Angles at the circumference in the same segment"
        ],
        Triangles: [
            "Sum of interior angles of triangles add up to 180",
            "Exterior angles of triangles",
            "Opposite angles, equal sides",
            "Angles opposite equal sides",
            "Sides opposite equal angles",
            "Pythagorus / Theorem of Pythagorus / Converse Pythagorus",
            "Midpoint Theorem",
            "Line through midpoint || to second side",
            "Line prallel to one side of triangle / Prop theorem (name || lines)",
            "Line divides two sides of triangle proportionally",
            "Similar triangles",
            "Sides of triangle in proportion",
            "Smae base, same height / Equal bases, equal heights"
    
        ],
        Similarity:[
            "Angle, Angle, Angle (AAA)",
            "Side, Side, Side (SSS)"
    
        ],
    
        Congruency: [
            "Side, Side, Side (SSS)",
            "Side, Angle, Side (SAS)",
            "Angle, Angle, Side (AAS)",
            "Right angle, Hypotenuse, Side (RHS)"
    
        ],
        //Quadrilaterals :[],
    };

    const keywordOutput = document.getElementById("keywordOutput");
    const theorems_in_table = document.getElementById("theorems");
    /*keywordOutput.innerHTML = ""; // Clear previous content
    theorems_in_table.innerHTML = ""; // Clear previous table content*/

    if (loadedKeywords && loadedKeywords.length > 0) {
        // Create the table element
        const table = document.createElement("table");
        table.border = "1";

        // Create table header row
        const headerRow = table.insertRow();
        const headerKeyword = headerRow.insertCell(0);
        headerKeyword.textContent = "Keyword";
        headerKeyword.style.fontWeight = "bold";  // Make "Keyword" bold

        const headerTheorem = headerRow.insertCell(1);
        headerTheorem.textContent = "Property";
        headerTheorem.style.fontWeight = "bold";  // Make "Keyword" bold


        // Populate the table with keywords and their associated theorems
        loadedKeywords.forEach(keyword => {
            if (theorems[keyword]) {
                let firstKeyword = true;

                if (Array.isArray(theorems[keyword])) {
                    theorems[keyword].forEach(theorem => {
                        const row = table.insertRow();
                        const cellKeyword = row.insertCell(0);
                        const cellTheorem = row.insertCell(1);

                        if (firstKeyword) {
                            cellKeyword.textContent = keyword;
                            cellKeyword.style.fontWeight = "bold";  // Make "Keyword" bold

                            firstKeyword = false;
                        } else {
                            cellKeyword.textContent = ""; // Don't repeat keyword in subsequent rows
                        }

                        cellTheorem.textContent = theorem;

                        // Add event listener for highlighting
                        cellTheorem.addEventListener('click', function() {
                            cellTheorem.classList.toggle('highlighted');
                            storeFinalTheorems(); // Update storage when a theorem is highlighted
                        });
                    });
                }
            } else {
                const row = table.insertRow();
                const cellKeyword = row.insertCell(0);
                const cellTheorem = row.insertCell(1);
                cellKeyword.textContent = keyword;
                cellKeyword.style.fontWeight = "bold";  // Make "Keyword" bold

                cellTheorem.textContent = "No theorems found";
            }
        });

        // Append the table to the theorems_in_table element
        theorems_in_table.appendChild(table);
        
        // Save the table content in sessionStorage for persistence
        sessionStorage.setItem('finalTheoremsTable', theorems_in_table.innerHTML);

    } else {
        keywordOutput.textContent = "No keywords found in sessionStorage.";
    }
}

// Load the persistent table on page load
window.addEventListener('load', function() {
    const theorems_in_table = document.getElementById("theorems");
    const savedTableContent = sessionStorage.getItem('finalTheoremsTable');
    if (savedTableContent) {
        theorems_in_table.innerHTML = savedTableContent;

        // Reattach event listeners to restored table cells
        const cells = document.querySelectorAll('#theorems td:nth-child(2)');
        cells.forEach(cell => {
            cell.addEventListener('click', function() {
                cell.classList.toggle('highlighted');
                storeFinalTheorems(); // Update storage when a theorem is highlighted
            });
        });
    }
});




// Event listener to load keywords and display associated theorems
function showKeywords() {
    // CSS for highlighting the selected theorem
    const style = document.createElement('style');
    style.innerHTML = `
        .highlighted {
            background-color: yellow;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    loadKeywords();  // This will display the keywords in the UI
    //sessionStorage.setItem('finalTheorems', JSON.stringify(loadKeywords()));
    pattern_recognition();  // This will display the associated theorems in a table
    //sessionStorage.setItem('finalTheoremsTable', JSON.stringify(pattern_recognition()));
}

// Function to show final theorems
function showFinalTheorems() {
    storeFinalTheorems();  // Store highlighted theorems before displaying them

    const finalTheoremsContainer = document.getElementById('finalTheoremsContainer');
    
    finalTheoremsContainer.innerHTML = ''; // Clear previous content

    // Retrieve the theorems from sessionStorage
    const storedTheorems = JSON.parse(sessionStorage.getItem('finalTheorems')) || [];
    console.log("Stored theorems:", storedTheorems);

    if (storedTheorems.length > 0) {
        // Create heading
        const heading = document.createElement('h3');
        heading.textContent = "Here are the final theorems for the problem to use when solving:";
        finalTheoremsContainer.appendChild(heading);

        // Create list for theorems
        const list = document.createElement('ul');

        storedTheorems.forEach(theorem => {
            const listItem = document.createElement('li');
            listItem.textContent = theorem;
            listItem.style.fontSize ="20px";
            list.appendChild(listItem);
        });

        finalTheoremsContainer.appendChild(list);
    } else {
        // If no theorems are stored, display a message
        finalTheoremsContainer.textContent = "No theorems have been selected.";
    }
}



// Storing the theorems so that they can be accessible whenever they are needed
function storeFinalTheorems() {
    const highlightedCells = document.querySelectorAll('.highlighted');
    const finalTheorems = [];

    highlightedCells.forEach(cell => {
        finalTheorems.push(cell.textContent);
    });

    console.log("Saving final theorems:", finalTheorems);
    
    // Store the final theorems in sessionStorage
    sessionStorage.setItem('finalTheorems', JSON.stringify(finalTheorems));
}


// MATCHING FUNCTION
function matching() {
    const keywords = myKeywordsCheckList();
    const keywordOutput = document.getElementById("keywordOutput");
    
    // Clear the previous content
    //keywordOutput.textContent = "";
    
    // Display the keywords in the paragraph
    keywordOutput.textContent = keywords.join(', ');

    console.log("Saving keywords:", keywords);

    // Store the keywords in sessionStorage
    sessionStorage.setItem('selectedKeywords', JSON.stringify(keywords));
}

// LOAD KEYWORDS FUNCTION
function loadKeywords() {
    const storedKeywords = JSON.parse(sessionStorage.getItem("selectedKeywords"));
    if (storedKeywords) {
        console.log("Retrieved keywords:", storedKeywords);

        // Display the keywords in a paragraph
        const keywordOutput = document.getElementById("keywordOutput");
        keywordOutput.textContent = storedKeywords.join(', ');
    } else {
        console.warn("No keywords found in sessionStorage.");
    }
}

let conc1 = "";
let conc2 = "";
function CheckingASD() {
    let ASD1 = document.getElementById("diagramASD1").value.toLowerCase();
    let ASD2 = document.getElementById("diagramASD2").value.toLowerCase();
    let ASD3 = document.getElementById("diagramASD3").value.toLowerCase();
    let feedbackASD = "";

    //let conclusion = document.getElementById("ASD_ACR").value.toLowerCase();

    // Clear existing feedback for specific angles before rechecking
    conc1 = conc1.replace(/Angle A has no equivalent angle other than itself.<br>/g, "");
    conc1 = conc1.replace(/Angle S1 = Angle T2 \[proved in 10.1\].<br>/g, "");
    conc1 = conc1.replace(/Angle D1 = 180 - Angle S1 - Angle A \[sum of interior angles of triangle = 180\].<br>/g, "");

    if (a1.checked) {
        feedbackASD += "Correct! Angle A has no equivalent angle other than itself.<br>";
        conc1 += "Angle A has no equivalent angle other than itself.<br>";  // Append only the desired feedback
    } else {
        feedbackASD += "Incorrect for Angle A! Look at the diagram again.<br>";
    }

    if (b2.checked) {
        feedbackASD += "Correct! Angle S1 = Angle T2 [proved in 10.1].<br>";
        conc1 += "Angle S1 = Angle T2 [proved in 10.1].<br>";  // Append only the desired feedback
    } else {
        feedbackASD += "Incorrect for Angle S1! Anything that you can remember from 10.1?.<br>";
    }

    if (c3.checked) {
        feedbackASD += "Correct! Angle D1 = 180 - Angle S1 - Angle A [sum of interior angles of triangle = 180].<br>";
        conc1 += "Angle D1 = 180 - Angle S1 - Angle A [sum of interior angles of triangle = 180].<br>";  // Append only the desired feedback
    } else {
        feedbackASD += "Incorrect for Angle D1! Look at the triangle alone and go back to your theorems, what can you say about that angle?.<br>";
    }

    // Checking the conclusion
    //conclusion = conclusion.toLowerCase().replace(/\s+/g, "");

    var feedbackElementASD = document.getElementById("checkingASD");

    if (feedbackElementASD.style.display === "none") {
        // Diagram ASD
        feedbackElementASD.innerHTML = feedbackASD;  // Show both feedback and conc1
        feedbackElementASD.style.display = "block";
        this.textContent = "Hide Feedback";
    } else {
        // Diagram ASD
        feedbackElementASD.style.display = "none"; // Hide the paragraph
        this.textContent = "Show Feedback";
    }
}

function CheckingACR(){

 let ACR1 = document.getElementById("diagramACR1").value.toLowerCase();
 let ACR2 = document.getElementById("diagramACR2").value.toLowerCase();
 let ACR3 = document.getElementById("diagramACR3").value.toLowerCase();
 let feedbackACR = "";


// Clear existing feedback for specific angles before rechecking
conc2 = conc2.replace(/Angle A has no equivalent angle other than itself.<br>/g, "");
conc2 = conc2.replace(/Angle R1 = 180 - Angle C2 - Angle A \[sum of interior angles of a triangle\].<br>/g, "");
conc2 = conc2.replace(/Angle C2 = T2 \[alternate angles\].<br>/g, "");

if(aa1.checked){
    feedbackACR = "Correct! Angle A has no equivalent angle other than it self.<br>"
    //conc += feedbackACR.replace("Correct!", "");
}
else{
    feedbackACR += "Incorrect for Angle A! Look at the diagram again.<br>"
}

if(bb2.checked){
    feedbackACR += "Correct! Angle R1 = 180 - Angle C2 - Angle A [sum of interior angles of a triangle].<br>"
    conc2 += "Angle R1 = 180 - Angle C2 - Angle A [sum of interior angles of a triangle].<br>";

}
else{
    feedbackACR += "Incorrect for Angle R1! Look at the triangle alone and go back to your theorems, what can you say about that angle?.<br>"
}

if(cc1.checked){
    feedbackACR += "Correct! Angle C2 = T2 [alternate angles].<br>"
    conc2 += "Angle C2 = T2 [alternate angles].<br>";

}
else{
    feedbackACR += "Incorrect for Angle C2! Go back to your diagram with parallel lines. Remember we are looking for an angle that will match one of the angles in triangle ASD.<br>"
}

var feedbackElementACR = document.getElementById("checkingACR");

if (feedbackElementACR.style.display === "none" ) {
    
 //Diagram ACR
 feedbackElementACR.innerHTML = feedbackACR;
 feedbackElementACR.style.display = "block";
 this.textContent = "Hide Feedback";


} else {

 //Daigram ACR
 feedbackElementACR.style.display = "none"; // Hide the paragraph
 this.textContent = "Show Feedback"

}

}
/*
function angle_sides(){
         // Diagram 2
         let angles2 = document.getElementById("angles2");
         let sides2 = document.getElementById("sides2");
         let feedback2="";
          // Diagram 1
          let angles1 = document.getElementById("angles1");
          let sides1 = document.getElementById("sides1");
          let feedback1 = "";

                // Check angles and sides for Diagram 1
      if (angles1.checked) {
        feedback1 = "Correct! Information is given in angles, there are no labels for the sides<br>";
        }
        if (sides1.checked) {
            feedback1 += "There are no labels for sides; nothing was said about sides, we are just asked to prove them.";
        }

        // Check angles and sides for Diagram 2
        if (angles2.checked) {
            feedback2 = "Correct! Information is given in angles, there are no labels for the sides<br>";
        }
        if (sides2.checked) {
            feedback2 += "There are no labels for sides; nothing was said about sides, we are just asked to prove them.";
        }

        var feedbackElement1 = document.getElementById("as1_checked");
        var feedbackElement2 = document.getElementById("as2_checked");

        if (feedbackElement2.style.display === "none" || feedbackElement1.style.display === "none" ) {
           
   
            
                //diagram 1
            feedbackElement1.innerHTML = feedback1;
            feedbackElement1.style.display = "block";
            this.textContent = "Hide Feedback"; 
        
                    
             //diagram 2
           feedbackElement2.innerHTML = feedback2;
           feedbackElement2.style.display = "block";
           this.textContent = "Hide Feedback"; 
   
   
   
        } else {
       
            feedbackElement1.style.display = "none"; // Hide the paragraph
            this.textContent = "Show Feedback"; // Re

            feedbackElement2.style.display = "none"; // Hide the paragraph
            this.textContent = "Show Feedback"; // Re
   
        }
   
}*/

function prop_sides(){
    //For triangles ADS and ACR
    let propA = document.getElementById("propA");
    let propAreasoning = document.getElementById("propReasoning").value.toLowerCase();
    let propB = document.getElementById("propB");
    let propC = document.getElementById("propC");
    let feedback="";

    //for checking remaning sides from the similar triangles
    let side1 = document.getElementById("sideAR");
    let side2 = document.getElementById("sideSD");
    let side3 = document.getElementById("sideAC");
    let side4 = document.getElementById("sideCT");
    let feedbackSides = "";

    //For triangles ADS and ACR
    let propD = document.getElementById("propD");
    let propreasoning = document.getElementById("propReasoning2").value.toLowerCase();
    let propE = document.getElementById("propE");
    let feedback2 = "";

    //removing spaces
    propAreasoning = propAreasoning.toLowerCase().replace(/\s+/g, "");
    console.log(propAreasoning);

    //checking proportion sides
    if(propA.checked && (propAreasoning.includes("ads|||arc") || propAreasoning.includes("arc|||ads") || propAreasoning.includes("das|||rac") || propAreasoning.includes("rac|||das") || propAreasoning.includes("sad|||car") || propAreasoning.includes("acr|||asd") || propAreasoning.includes("asd|||acr") || propAreasoning.includes("car|||sad"))){
        
        feedback += "Correct! AS is equivalent with AC and SD is equivalent with CR, therefore their ratios are in propotion."
    }
    else if(propB.checked){
        feedback += "Incorrect! You can not have a ratio with sides from different triangles. AD is from ADS and AR is from ARC";
    }
    else{
        feedback += "Incorrect! Lines in proportion must match, look at the definitions."
    }

    //checking remaining sides from the similar triangles
    if (side1.checked && side4.checked && !side2.checked && !side3.checked) {
                feedbackSides = "Correct! These are the 2 remaining sides according to the question that the similar angles did not have.";
    } else if (side1.checked && !side4.checked && !side3.checked && !side2.checked) {
        feedbackSides = "Correct! But is it AR only?";
    } else if (side4.checked && !side1.checked && !side3.checked && !side2.checked) {
        feedbackSides = "Correct! But is it CT only?";
    } else if (side3.checked || side2.checked) {
        feedbackSides = "Incorrect! SD and AC already exist.";
    } else {
        feedbackSides = "Incorrect! Look at the diagrams and question again.";
    }

    //checking proportion sides
    if(propE.checked && (propreasoning.includes("proportionality") || propreasoning.includes("prop") )){
        
        feedback2 += "Correct! AR is equivalent with CR and AS is equivalent with TC, therefore their ratios are in propotion."
    }
    else if(propD.checked){
        feedback2 += "Incorrect! You can not have a ratio with sides from different triangles. CT and AR are both from different sides of the triangle";
    }
    else{
        feedback2 += "Incorrect! Lines in proportion must match, look at the definitions. Recall Proportionality Theorem."
    }

            

    let feedbackElement = document.getElementById("prop_ASD_ACR");
    let remainingSides = document.getElementById("remaining_sides");
    let propACR = document.getElementById("prop_ACR");


    if (feedbackElement.style.display === "none" || remainingSides.style.display === "none") {
        feedbackElement.innerHTML = feedback;
        feedbackElement.style.display = "block";
        this.textContent = "Hide Feedback";


        //remaining sides
        remainingSides.innerHTML = feedbackSides;
        remainingSides.style.display = "block"
        this.textContent = "Hide Feedback";

        //prop theorem
        propACR.innerHTML = feedback2;
        propACR.style.display = "block"
        this.textContent = "Hide Feedback";
        

    } else {
        feedbackElement.style.display = "none";
        this.textContent = "Show Feedback";

        //remaining sides
        remainingSides.style.display = "none";
        this.textContent = "Hide Feedback";

        //prop theorem
        propACR.style.display = "none";
        this.textContent = "Hide Feedback";

    }


}

function conclusions_here() {
    // Check if all correct answers in CheckingASD are selected
    const isASDCorrect = a1.checked && b2.checked && c3.checked;

    // Check if all correct answers in CheckingACR are selected
    const isACRCorrect = aa1.checked && bb2.checked && cc1.checked;

    // If both checks pass, proceed with the conclusion
    if (isASDCorrect && isACRCorrect) {
        let conclusion = document.getElementById("ASD_ACR").value.toLowerCase();
        let conc = "";

        // Checking the conclusion
        conclusion = conclusion.toLowerCase().replace(/\s+/g, "");
        console.log(conclusion);

        if (conclusion.includes("a=a") && 
           (conclusion.includes("s1=c2") || conclusion.includes("c2=s1")) && 
           (conclusion.includes("r1=d1") || conclusion.includes("d1=r1")) && conclusion.includes("[aaa]") ) {
            conc += "OR<br>Conclusion : <br> SAD = CAR [Common] <br> S1 = T2 [Proven] <br> C2 = T2 [alternating angles] <br> D1 = R1 [Sum of angles in a triangle]<br>" +
            "S1 = C2 = T2 <br> Therefore triangle ADS and ACR are similar [AAA], we can then conclude that indeed AD/AR = AS/AC  [corresponding sides in proportion]";
        } else {
            conc += "Conclusion: Review the relationships between the angles from the diagrams to conclude correctly.<br>";
        }

        let finalConc = conc1 + conc2 + conc;

        finalConc = finalConc.replace(new RegExp("Angle A has no equivalent angle other than it self.<br>", "g"), "");
        finalConc = finalConc.replace(new RegExp("Angle D1 = 180 - Angle S1 - Angle A [sum of interior angles of triangle = 180].<br>", "g"), "");

        // Display the feedback
        var feedbackElementconc = document.getElementById("cs_checked1");

        if (feedbackElementconc.style.display === "none") {
            feedbackElementconc.innerHTML = finalConc;
            feedbackElementconc.style.display = "block";
            this.textContent = "Hide Feedback"; 
        } else {
            feedbackElementconc.style.display = "none"; // Hide the paragraph
            this.textContent = "Show Feedback"; // Reset button text
        }
    } else {
        alert("Please make sure all answers in both diagrams are correct before viewing the conclusion.");
    }
}


//working with congruency and similarities and their properties
function congruency_similarity() {
    let s = document.getElementById("similarity");
    let c = document.getElementById("congruency");
    let feedback = "";

    let prop1 = document.getElementById("prop1");
    let prop2 = document.getElementById("prop2");
    let prop3 = document.getElementById("prop3");
    let prop4 = document.getElementById("prop4"); 
    let prop5 = document.getElementById("prop5");

    let feedbackProps = "";

    /* sessionStorage.setItem('finalTheoremsTable', theorems_in_table.innerHTML); */
    const loadedKeywords = JSON.parse(sessionStorage.getItem("selectedKeywords")) || [];

    // Check similarity and congruency
    if (s.checked)  {
        feedback = "Correct. The triangles have different side lengths, which is a property for similar shapes<br>";        

    }
    if (c.checked) {
        feedback += "Incorrect. Congruent shapes have the same size in both angles and sides<br>";
    }
    if(prop2.checked){
        feedbackProps = "Incorrect! RHS is not included in Similarities, visit the definitions and theorems"
    }

// Count how many properties are checked
    let checkedCount = 0;

    if (prop1.checked) checkedCount++;
    if (prop5.checked) checkedCount++;
    // Add checks for any additional properties
    if (prop2.checked) checkedCount++;
    if (prop3.checked) checkedCount++;
    if (prop4.checked) checkedCount++;

    if (prop1.checked && prop5.checked && checkedCount === 2) {
        feedbackProps = "Correct! SSS and AAA are suited for Similarity since it deals with same shapes and same angles but different side lengths. <br> Do you know when to apply SSS or AAA, if you are not sure review the Theorem tab";
    } else if (prop1.checked && checkedCount === 1) {
        feedbackProps = "Correct, but it's not the only one! What is the other one?";
    } else if (prop5.checked && checkedCount === 1) {
        feedbackProps = "Correct, but it's not the only one! What is the other one?";
    } else {
        feedbackProps = "Incorrect! What is the difference between Similarity and Congruency? Review the Definitions and Theorems.";
    }

     
     var feedbackElementProps = document.getElementById("shapes_checked");
     var feedbackElementCS = document.getElementById("cs_checked");


     if ( feedbackElementProps.style.display === "none" ) {

        //checking the congruency_similarity
        feedbackElementCS.innerHTML = feedback;
        feedbackElementCS.style.display = "block";
        this.textContent = "Hide Feedback"; // 

        
         //checking the shapes
         feedbackElementProps.innerHTML = feedbackProps;
         feedbackElementProps.style.display = "block";
         this.textContent = "Hide Feedback"; // 


     } else {

        //checking cs feedbackElementCS
        feedbackElementCS.style.display = "none"; // Hide the paragraph
         this.textContent = "Show Feedback"; 
         
         //checking shapes
         feedbackElementProps.style.display = "none"; // Hide the paragraph
         this.textContent = "Show Feedback"; 

     }

}

function prop_midpoint_theorems() {
    let theorem = document.getElementById("prop_vs_midpoint");
    let feedback = "";

    let proptheorem = document.getElementById("proptheorem");
    let midpointtheorem = document.getElementById("midpointtheorem");

    //proportionality thoerem vs midpoint theorem
    if (proptheorem.checked) {
        feedback += "Correct! Proportionality Theorem since there are parallel lines in the triangle ACR";
    } else if (midpointtheorem.checked) {
        feedback += "Incorrect! What are the properties of the Mid-point Theorem? Refer to the Definitions tab.";
    } else {
        feedback += "Please select an option before proceeding.";
    }

    if (theorem.style.display === "none") {
        theorem.innerHTML = feedback;
        theorem.style.display = "block";
        document.getElementById("showTheoremsButton").textContent = "Hide Feedback";
    } else {
        theorem.style.display = "none";
        document.getElementById("showTheoremsButton").textContent = "Show Feedback";
    }
}


function checkDiagrams(){
    //let step_1 = document.getElementById("gg-element-final-1");
    //10.1 Conclusion : ds678qjm
    var parametersfinal = {
        "width": 800,
        "height": 450,
        "showToolBar": false,
        "borderColor": null,
        "showMenuBar": false,
        "showAlgebraInput": false,
        "showResetIcon": false,
        "enableLabelDrags": false,
        "enableShiftDragZoom": true,
        "enableRightClick": false,
        "capturingThreshold": null,
        "showToolBarHelp": true,
        "errorDialogsActive": true,
        "useBrowserForJS": false,
        "material_id": "ds678qjm"
    };
    var appletfinal = new GGBApplet(parametersfinal,true);
    
    
    let checkDs = document.getElementById("ggb-element-final-1")
    if (checkDs.style.display === "none") {
        appletfinal.inject('ggb-element-final-1');
        checkDs.style.display = "block";
        this.textContent = "Hide Conclusion"; // Change button text
    } else {
        checkDs.style.display = "none"; // Hide the paragraph
        this.textContent = "Show Conclusion"; // Reset button text
    }    
}

