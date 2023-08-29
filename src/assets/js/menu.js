/* 
const headerToggle = document.getElementById("headerToggle");
-> HTML 문서에서 ID가 "headerToggle"인 요소를 변수 headerToggle에 할당
이는 모바일 토글 버튼 요소를 가리키게 된다.

*/


export function menu(){
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.querySelector(".header__nav");

    if(headerToggle){
        headerToggle.addEventListener("click", ()=>{
            headerNav.classList.toggle("show");
            headerToggle.getAttribute("aria-expanded") === "ture"
                ?headerToggle.setAttribute("aria-expanded","false")
                :headerToggle.setAttribute("aria-expanded","true");
        });
    }
}