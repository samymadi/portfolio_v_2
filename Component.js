class ProgressBarSkill extends HTMLElement{
    constructor() {
        super();
        this.pourcentage = this.getAttribute("pourcentage");
        this.name = this.getAttribute('name');
        console.log(this.pourcentage);
         this.innerHTML=`<div class="progress_container">
                            <div class="progress_info">
                                <span>${this.name}</span>
                                <span>${this.pourcentage}%</span>
                            </div>

                            <div  class="progress_bar1">
                                <div style='width:${this.pourcentage}%' class="progress_bar2"></div>
                            </div>
                        </div>`   
    }
    
} 

customElements.define("progress-bar-skill",ProgressBarSkill);
