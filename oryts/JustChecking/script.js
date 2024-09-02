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

    // Check angles in Diagram 1
function diagram1() {
    var angle1 = document.getElementById("angle1");
    var angle2 = document.getElementById("angle2");
    var angle3 = document.getElementById("angle3");
    var feedback = "";

    var angle11 = document.getElementById("angle11");
    var angle22 = document.getElementById("angle22");
    var angle33 = document.getElementById("angle33");
    var feedback1 = "";

    let reasoning = document.getElementById("reasoning").value.toLowerCase();
    let reasoning1 = document.getElementById("reasoning1").value.toLowerCase();

    // Check if angle1 is checked and provide feedback
    if (angle1.checked) {
        if (reasoning.includes("exterior angles of cyclic quadrilateral")) {
            feedback += "Correct! <br>S1 =  Q1 + Q2 [exterior angles of  cyclic quadrilateral].<br>";
        } else {
            feedback += "For Angle Q1 + Q2, think about how exterior angles relate to cyclic quadrilaterals.<br>";
        }
    }

    // Check if angle2 is checked and provide feedback
    if (angle2.checked) {
        if (reasoning.includes("exterior angles of cyclic quadrilateral")) {
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


    // Check if angle11 is checked and provide feedback
    if (angle11.checked) {
        if (reasoning.includes("exterior angles of cyclic quadrilateral")) {
            feedback += "SDCT is not a cyclic quadrilateral. You know why? Review the theorems tab.<br>";
        } 
        else{
            feedback += "Is there really a relationship between S1 and P2?"
        }

    }

    // Check if angle22 is checked and provide feedback
    if (angle22.checked) {
        if (reasoning1.includes("exterior angles of triangle")) {
            feedback1 += "Correct! <br>T2 = R2 + Q2 [exterior angles of triangle].<br>";
        } else {
            feedback1 += "For Angle R2 + Q2, think about how exterior angles relate to triangles.<br>";
        }    
    }

    // Check if angle33 is checked and provide feedback
    if (angle33.checked) {
        feedback1 += "Does Q1 really have a relationship with Q1?<br>";
    }


    // Display the feedback
        var feedbackElement1 = document.getElementById("angleFeedback1")

        if (feedbackElement1.style.display === "none") {
            feedbackElement1.innerHTML = feedback;
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
    var feedback = "";
    let reasoning = document.getElementById("reasoning2").value.toLowerCase();


    //checking if the box is checked
    if (angle4.checked) {
        if (reasoning.includes("tan chord theorem")) {
            feedback += "Correct! <br>P1 = Q1 [tan chord theorem].<br>";
        } else {
            feedback += "Incorrect! For Angle Q1, theorems that are related to tangents, look at your theorem table.<br>";
        }
    }
    if (angle5.checked) {
        feedback += "Does S2 really have a relationship with P1? <br> Look at it again.<br>";
    }
    if (angle6.checked) {
        feedback += "Does P2 really have a relationship with P1? <br>Look at it again.<br>";
    }

    // Display the feedback
    var feedbackElement = document.getElementById("angleFeedback2")

    if (feedbackElement.style.display === "none") {
        feedbackElement.innerHTML = feedback;
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
        if (reasoning.includes("corresponding angles")) {
        feedback += "Incorrect! How do corresponding look?.<br>";
    } else {
        feedback += "Is there really a relationship between T2 and S2? <br> Look at the diagram again.<br>";
    }
    }
    if (angle8.checked) {
        if (reasoning.includes("alternate angles" || "alternating angles")) {
            feedback += "Correct! <br> T2 = C2 [corresponding angles, CA || TS].<br>";
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
    let conclusion = document.getElementById("combine1").value;

    // Information from Diagram 1
    
    /*if (diagram1Reasoning.includes("exterior angle theorem")) {
        conclusion += "From Diagram 1: Angle Q1 + Q2 = S1 [Exterior Angle Theorem].<br>";
    } else {
        conclusion += "Diagram 1: Ensure that you are applying the Exterior Angle Theorem correctly.<br>";
    }

    if (diagram1Reasoning.includes("exterior angle theorem")) {
        conclusion += "From Diagram 1: Angle R2 + Q2 = T2 [Exterior Angle Theorem].<br>";
    } else {
        conclusion += "Diagram 1: Ensure that you are applying the Exterior Angle Theorem correctly.<br>";
    }

    // Information from Diagram 2
    const diagram2Reasoning = document.getElementById("reasoning2").value.toLowerCase();
    if (diagram2Reasoning.includes("tan chord theorem")) {
        conclusion += "From Diagram 2: Angle Q1 = P1 [Tan Chord Theorem].<br>";
    } else {
        conclusion += "Diagram 2: Ensure that you are applying the Tan Chord Theorem correctly.<br>";
    }

    // Information from Diagram 3
    const diagram3Reasoning = document.getElementById("reasoning3").value.toLowerCase();
    if (diagram3Reasoning.includes("alternating angles theorem")) {
        conclusion += "From Diagram 3: Angle C2 = T2 [ALternating Angles Theorem].<br>";
    } else {
        conclusion += "Diagram 3: Ensure that you are applying the Corresponding Angles Theorem correctly.<br>";
    }*/

    // Combine the information
   if (conclusion.includes("S1 = Q1 + Q2") && conclusion.includes("Q1 = P1") && conclusion.includes("T2 = R2 + Q2")) {
        conclusion = "Conclusion: <br>Since S1 = Q1 + Q2, and Q1 = P1, and R2 + Q2 = T2. <br>" + "That means S1 = P1 + Q2. <br>" + "Remember that we were given R2 = P1, so T2 = P1 + Q2 <br>" + "Both T2 and S1 are equal to P1 + Q2 meaning they are indeed equal.";
    } else {
        conclusion = "Conclusion: Review the relationships between the angles from the diagrams to conclude correctly.<br>";
    }

    // Display the conclusion
    
    const conclusionElement = document.getElementById("conclusionFeedback");
    

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

    
    if(checkedLabels.includes("Circle with center")){
        document.getElementById("choose-keywords").innerHTML = "What is a center? Is there anything that includes a center in the statement or diagram?"
    }
    else if(checkedLabels.includes("Cyclic Quadrilateral") && checkedLabels.includes("Tangent") && checkedLabels.includes("Triangles") && checkedLabels.includes("Parallel Lines")){
        document.getElementById("choose-keywords").innerHTML = "Correct, we can work with these keywords."
    }
    else if(checkedLabels.length < 4){
        document.getElementById("choose-keywords").innerHTML = "Is that all?."

    }
    else{
        document.getElementById("choose-keywords").innerHTML = "Are you sure?"

    }

    return checkedLabels;
}

// PATTERN RECOGNITION
//retrieves the keywords from storage, matches the keywords with their properties
function pattern_recognition() {
    const loadedKeywords = JSON.parse(sessionStorage.getItem("selectedKeywords")); // Retrieve keywords from localStorage
    const theorems = {
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
    keywordOutput.innerHTML = ""; // Clear previous content
    theorems_in_table.innerHTML = ""; // Clear previous table content

    if (loadedKeywords && loadedKeywords.length > 0) {
        // Create the table element
        const table = document.createElement("table");
        table.border = "1";

        // Create table header row
        const headerRow = table.insertRow();
        const headerKeyword = headerRow.insertCell(0);
        headerKeyword.textContent = "Keyword";
        const headerTheorem = headerRow.insertCell(1);
        headerTheorem.textContent = "Property";

        // Populate the table with keywords and their associated theorems
        loadedKeywords.forEach(keyword => {
            if (theorems[keyword]) {
                let firstKeyword = true;
                let highlightedCell = true;

                if (Array.isArray(theorems[keyword])) {
                    theorems[keyword].forEach(theorem => {
                        const row = table.insertRow();
                        const cellKeyword = row.insertCell(0);
                        const cellTheorem = row.insertCell(1);

                        if (firstKeyword) {
                            cellKeyword.textContent = keyword;
                            firstKeyword = false;
                        } else {
                            cellKeyword.textContent = ""; // Don't repeat keyword in subsequent rows
                        }

                        cellTheorem.textContent = theorem;

                        // Add event listener for highlighting
                        cellTheorem.addEventListener('click', function() {
                            cellTheorem.classList.toggle('highlighted');
                            highlightedCell = true;
                        });

                        if(highlightedCell){
                            const pCell = document.createElement("p");
                            pCell.innerHTML = cellTheorem.textContent
                        }
                    });
                } else {
                    const row = table.insertRow();
                    const cellKeyword = row.insertCell(0);
                    const cellTheorem = row.insertCell(1);
                    cellKeyword.textContent = keyword;
                    cellTheorem.textContent = theorems[keyword];

                    // Add event listener for highlighting
                    cellTheorem.addEventListener('click', function() {
                        cellTheorem.classList.toggle('highlighted');
                    });
                }
            } else {
                const row = table.insertRow();
                const cellKeyword = row.insertCell(0);
                const cellTheorem = row.insertCell(1);
                cellKeyword.textContent = keyword;
                cellTheorem.textContent = "No theorems found";
            }
        });

        // Append the table to the theorems_in_table element
        theorems_in_table.appendChild(table);
        
    } else {
        keywordOutput.textContent = "No keywords found in localStorage.";
    }
}
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
    pattern_recognition();  // This will display the associated theorems in a table
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
            list.appendChild(listItem);
        });

        finalTheoremsContainer.appendChild(list);
    } else {
        // If no theorems are stored, display a message
        finalTheoremsContainer.textContent = "No theorems have been selected.";
    }
}

function solvingFinalTheorems(){
    storeFinalTheorems();  // Store highlighted theorems before displaying them

    const finalTheoremsContainer2 = document.getElementById('finalTheoremsContainer2');
    
    finalTheoremsContainer2.innerHTML = ''; // Clear previous content

    // Retrieve the theorems from sessionStorage
    const storedTheorems = JSON.parse(sessionStorage.getItem('finalTheorems')) || [];
    console.log("Stored theorems:", storedTheorems);

    if (storedTheorems.length > 0) {
        // Create heading
        const heading = document.createElement('h3');
        heading.textContent = "Here are the final theorems for the problem to use when solving:";
        finalTheoremsContainer2.appendChild(heading);

        // Create list for theorems
        const list = document.createElement('ul');

        storedTheorems.forEach(theorem => {
            const listItem = document.createElement('li');
            listItem.textContent = theorem;
            list.appendChild(listItem);
        });

        finalTheoremsContainer2.appendChild(list);
    } else {
        // If no theorems are stored, display a message
        finalTheoremsContainer2.textContent = "No theorems have been selected.";
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
    keywordOutput.textContent = "";
    
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


//working with congruency and similarities and their properties
function congruency_similarity() {
    let s = document.getElementById("similarity");
    let c = document.getElementById("congruency");
    let feedback = "";

    let triangle = document.getElementById("shape1");
    
    let feedbackShapes = "";


    // Diagram 1
    let angles1 = document.getElementById("angles1");
    let sides1 = document.getElementById("sides1");
    let feedback1 = "";

    let ASD1 = document.getElementById("diagramASD1").value.toLowerCase();
    let ASD2 = document.getElementById("diagramASD2").value.toLowerCase();
    let ASD3 = document.getElementById("diagramASD3").value.toLowerCase();
    let feedbackASD = "";

    // Diagram 2
    let angles2 = document.getElementById("angles2");
    let sides2 = document.getElementById("sides2");
    let feedback2 = "";

    let ACR1 = document.getElementById("diagramACR1").value.toLowerCase();
    let ACR2 = document.getElementById("diagramACR2").value.toLowerCase();
    let ACR3 = document.getElementById("diagramACR3").value.toLowerCase();
    let feedbackACR = "";

    //Conclusions
    let conclusion = document.getElementById("ASD_ACR").value.toLowerCase();
    let conc = "";

    // Check similarity and congruency
    if (s.checked) {
        feedback = "Correct. The triangles have different side lengths, which is a property for similar shapes<br>";
    }
    if (c.checked) {
        feedback += "Incorrect. Congruent shapes have the same size in both angles and sides<br>";
    }

    //checking the shapes
    if(triangle.checked){
        feedbackShapes = "Correct! There are only triangles in the diagram."
    }
    else{
        feedbackShapes = "Incorrect! Look at the diagram again."
    }

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

    // Check specific angle inputs for ASD
    if (ASD1.includes("none") && ASD2.includes("t2") && ASD3.includes("s2")) {
        feedbackASD = "Correct<br>";
    } else {
        feedbackASD = "Incorrect<br>";
    }

      // Check specific angle inputs for ACR
      if (ACR1.includes("none") && ACR2.includes("none") && ACR3.includes("t2")) {
        feedbackACR = "Correct<br>";
    } else {
        feedbackACR = "Incorrect<br>";
    }

    //checking the conclusion
    if(conclusion.includes("a = a") && conclusion.includes("s1 = s2") && conclusion.includes("r1 = d1")){
        conc += "Conclusion : <br> A = A [Common] <br> S1 = T2 [Proven] <br> C2 = T2 [alternating angles] <br> D1 = R1 [Sum of angles in a triangle]<br>" +
        "S1 = C2 = T2 <br> Therefore triangle ADS and ACR are similar [AAA], we can then conclude that indeed AD/AR = AS/AC  [corresponding sides in proportion]" ;
    }
   else {
        conc += "Conclusion: Review the relationships between the angles from the diagrams to conclude correctly.<br>";
    }

     // Display the feedback
     var feedbackElement = document.getElementById("cs_checked")
     var feedbackElement1 = document.getElementById("as1_checked");
     var feedbackElement2 = document.getElementById("as2_checked");
     var feedbackElementASD = document.getElementById("checkingASD");
     var feedbackElementACR = document.getElementById("checkingACR");
     var feedbackElementconc = document.getElementById("cs_checked1");
     var feedbackElementShapes = document.getElementById("shapes_checked");

     if (feedbackElement.style.display === "none" || feedbackElementACR.style.display === "none" || feedbackElementASD.style.display === "none"|| feedbackElement1.style.display === "none" || feedbackElement2.style.display === "none") {
         feedbackElement.innerHTML = feedback;
         feedbackElement.style.display = "block";
         this.textContent = "Hide Feedback"; // Change button text

         //checking the shapes
         feedbackElementShapes.innerHTML = feedbackShapes;
         feedbackElementShapes.style.display = "block";
         this.textContent = "Hide Feedback"; // 

            //diagram 1
         feedbackElement1.innerHTML = feedback1;
         feedbackElement1.style.display = "block";
         this.textContent = "Hide Feedback"; 

         //diagram 2
         feedbackElement2.innerHTML = feedback2;
         feedbackElement2.style.display = "block";
         this.textContent = "Hide Feedback";

         //Diagram ASD
         feedbackElementASD.innerHTML = feedbackASD;
         feedbackElementASD.style.display = "block";
         this.textContent = "Hide Feedback";

          //Diagram ACR
          feedbackElementACR.innerHTML = feedbackACR;
          feedbackElementACR.style.display = "block";
          this.textContent = "Hide Feedback";

          feedbackElementconc.innerHTML = conc;
          feedbackElementconc.style.display = "block";
          this.textContent = "Hide Feedback"; 

     } else {
         feedbackElement.style.display = "none"; // Hide the paragraph
         this.textContent = "Show Feedback"; // Reset button text

         //checking shapes
         feedbackElementShapes.style.display = "none"; // Hide the paragraph
         this.textContent = "Show Feedback"; 

         //digram 1
         feedbackElement1.style.display = "none"; // Hide the paragraph
         this.textContent = "Show Feedback"

         //diagram 2
         feedbackElement2.style.display = "none"; // Hide the paragraph
         this.textContent = "Show Feedback"

         //Daigram ASD
         feedbackElementASD.style.display = "none"; // Hide the paragraph
         this.textContent = "Show Feedback"

         //Daigram ACR
         feedbackElementACR.style.display = "none"; // Hide the paragraph
         this.textContent = "Show Feedback"

         feedbackElementconc.style.display = "none"; // Hide the paragraph
         this.textContent = "Show Feedback"; // Reset button text


     }

     //checking the properties associated with the keywords selected
     


}

function choose_keywords(){
    
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
    appletfinal.inject('ggb-element-final-1');
    
}

