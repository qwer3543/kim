/**
 * Fluid 모드 여부 
 * @returns fluid 모드 여부 
 */
export const isFluid = ()=>{
    let isFluidLS = localStorage.getItem('isFluid');
    if(isFluidLS){
        console.log(isFluidLS);
        let bFluid = JSON.parse(isFluidLS);
        if(bFluid){
            return true;
        }else{
            return false;
        }
    }
    return false;
}
/**
 * Fluid 모드 이벤트 클릭 했을 때
 * @param e  : event 
 */
export const clickFulid = (e)=>{
    e.preventDefault();
    toggleFulid();
}
/**
 * fluid 모드 토글
 */
export const toggleFulid = ()=>{
    if(isFluid()){
        setFluid(false);
    }else{
        setFluid(true);
    }
}

/**
 * Fluid 모드 설정
 * @param fluid  : Fulid모드 여부 (true or false)
 */
export const setFluid =  (fluid)=>{
    let bFluid =  Boolean(fluid);
    let container = document.querySelector('[data-layout]');
    if(container){
        if(bFluid){
            container.classList.remove('container');
            container.classList.add('container-fluid');
        }else{
            container.classList.remove('container-fluid');
            container.classList.add('container');
        }
        localStorage.setItem('isFluid', String(bFluid));
    }else{
        localStorage.setItem('isFluid', String(false));
    }
}