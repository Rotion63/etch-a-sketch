const html =document.querySelector('html');
const mainWrapper=document.querySelector('#mainWrapper');


const buttonContainer=document.createElement('div');
 buttonContainer.className="buttonContain";
 mainWrapper.appendChild(buttonContainer);


 const askBoxButton=document.createElement('button');
askBoxButton.className='askBoxButton';
askBoxButton.textContent='Box Size';
buttonContainer.appendChild(askBoxButton);


const clearButton=document.createElement('button');
clearButton.className='clearButton';
clearButton.textContent='Reset';
buttonContainer.appendChild(clearButton);


askBoxButton.addEventListener('click',()=>{
  //window.location.reload();
  clearGrid();
  let boxSize1=prompt("Enter the grid Number",16);
  makeGrid(boxSize1);

});

function defaultGrid(){
  clearGrid();
  makeGrid(16);
}


const gridWrapper=document.createElement('div');
gridWrapper.className='gridWrapper';
mainWrapper.appendChild(gridWrapper);

window.addEventListener('load',defaultGrid);
defaultGrid();

function makeGrid(boxNo){

gridWrapper.style.cssText=(`grid-template-columns: repeat(${boxNo},1fr);`);

if(boxNo<=64 && boxNo>0){

for(let i=1;i<=boxNo;i++){
    for(let j=1;j<=boxNo;j++){

        const grid=document.createElement('div');
        grid.className='grid';
        gridWrapper.appendChild(grid);

        grid.addEventListener('mouseenter',()=>{

            function random_rgba() {
                var o = Math.round, r = Math.random, s =255;
                return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
            }
            let randomColor = random_rgba();

            grid.style.cssText=(`background-color:${randomColor}`)
        })

        clearButton.addEventListener('click',()=>{
            grid.style.cssText=(`background-color:white`);
        })

    
    }

}


}else if(boxNo>64 || boxNo<1){
    alert("Please Enter the value in the range(1-64)");
    history.go(0);
}else if(boxNo!==Number || boxNo==null){
    alert('Please Enter a valid number.');
    history.go(0);
}
}


function clearGrid() {
  const gridArray = Array.from(gridWrapper.childNodes);
  gridArray.forEach((element) => {
    gridWrapper.removeChild(element);
  });
}