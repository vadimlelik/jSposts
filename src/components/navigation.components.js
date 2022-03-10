import {Component} from "../component";

export class NavigationComponents  extends  Component{
    constructor(id) {
        super(id);
        this.tabs  = []
    }
    init() {
        this.$el.addEventListener('click',tabClickHandler.bind(this))
    }
    registerTabs(tabs){
        this.tabs = tabs
    }

}

function tabClickHandler(event) {
    if (event.target.classList.contains('tab')){
        const tabsEl = Array.from(this.$el.querySelectorAll('.tab'))
        tabsEl.forEach((tab)=>{
            tab.classList.remove('active')
        })
        event.target.classList.add('active')
        const clickTab= event.target.dataset.name

        const activeTab = this.tabs.find((tab)=>tab.name === clickTab )

        this.tabs.forEach(tab=> tab.component.hide())

        activeTab.component.show()

    }



}