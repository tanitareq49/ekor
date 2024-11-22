const tabBtn = document.querySelectorAll(".tabs li");
const tabContainer = document.querySelectorAll(".tab-container");
for (tabs of tabBtn) {
  tabs.addEventListener("click", function () {
    for (tabContent of tabContainer) {
      tabContent.classList.remove("active");
    }
    const getId = this.getAttribute("data-tab");
    document.getElementById(getId).classList.add("active");
  });
}
for (btn of tabBtn) {
  btn.addEventListener("click", function () {
    for (btns of tabBtn) {
      btns.classList.remove("btn-active");
    }
    this.classList.add("btn-active");
  });
}
/* Mobile tab */
const mobileBtn= document.querySelector('.mobile-btn');
const mobileTabContainer= document.querySelector('.mobileTab-container');
const mobileTabs= mobileTabContainer.querySelectorAll('li');
console.log(mobileTabs)
mobileBtn.addEventListener('click', function(){
  mobileTabContainer.classList.toggle('hidden');
})

for(mobileTab of mobileTabs){
   mobileTab.addEventListener('click',function(){
    for (tabContent of tabContainer) {
      tabContent.classList.remove("active");
    }
    const getId = this.getAttribute("data-tab");
    document.getElementById(getId).classList.add("active");
    mobileTabContainer.classList.add('hidden');
   } )
}