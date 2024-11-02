/* 
Objective: get base, height of a triangle.calculate the area by using the provided formula. and then display the area.

step-1: Get the base value.

*/

function calculateTriangleArea(){
    const triangleBaseInput=document.getElementById('triangle-base').value;
    const triangleBaseValue=parseFloat(triangleBaseInput);
    const triangleHeightInput=document.getElementById('triangle-height').value;
    const triangleHeightValue=parseFloat(triangleHeightInput);
    const areaOfTriangle=triangleBaseValue*triangleHeightValue*0.5;
    console.log(areaOfTriangle);
}