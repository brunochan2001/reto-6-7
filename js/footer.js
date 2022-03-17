'use strict';
import InsightsAndTrends from '/js/InsightsAndTrends.js';
console.log(InsightsAndTrends);

const documentReady = ( ) => {
    const resourcesContainerResourcesPrincipal = document.getElementById('resourcesContainerResourcesPrincipal');
    const resourcesContainer = document.getElementById('resourcesContainer');
    const resourcesContainerBlog = document.getElementById('resourcesContainerBlog');
    const resourcesContainerBlogItems = document.getElementById('resourcesContainerBlogItems');

    const renderInsightsAndTrends = async ()=>{
        const {Guides} = InsightsAndTrends;
        console.log(Guides);
        Guides.forEach(element=> {
            let htmlSecundary = "";
            if (element.type == "primary") {
                resourcesContainerResourcesPrincipal.innerHTML += 
                `
                <div class="resources__container-resources-principal">
                    <a class="resources__container-resources-principal-link" href="${element.hrf}">
                      <div class="resources__container-resources-principal-container">
                        <h5 class="resources__container-resources-principal-subtitle">${element.about}</h5>
                        <h4 class="resources__container-resources-principal-title">${element.description}</h4>
                      </div>
                    </a> 
                </div>
                  `;
            } else {
                htmlSecundary += 
                `
                <div class="resources__container-resources-secundary">
                    <a class="resources__container-resources-secundary-link" href="${element.hrf}">
                      <figure class="resources__container-resources-secundary-info-img-container">
                        <img class="resources__container-resources-secundary-info-img" src="${element.image}" alt="Guides">
                      </figure>
                      <div class="resources__container-resources-secundary-descriptions-container">
                        <h4 class="resources__container-resources-secundary-descriptions">${element.description}</h4>
                        <figure class="resources__container-resources-secundary-container-arrow">
                          <img class="resources__container-resources-secundary-arrow" src="https://assets-global.website-files.com/613a0c11c446a1558ce5db7e/613a0c11c446a1c40de5dba6_Group.svg" alt="flecha">
                        </figure>
                      </div>
                    </a>
                  </div>
                  `;
            }
            resourcesContainerResourcesPrincipal.insertAdjacentHTML('afterend', htmlSecundary);

        });
        const {FromTheBlog} = InsightsAndTrends;
        FromTheBlog.forEach(element=> {
            resourcesContainerBlogItems.innerHTML += 
                `
                <a class="resources__container-blog-items-link" href="${element.hrf}">
                    <figure class="resources__container-blog-items-link-container-img">
                        <img class="resources__container-blog-items-link-img" src="${element.image}" alt="Unit|intuit">
                    </figure>
                    <h3 class="resources__container-blog-items-link-about">${element.description}</h3>
                    <h4 class="resources__container-blog-items-link-date">${element.date}</h4>
                </a>
                  `;
            
        });
        

    }
    renderInsightsAndTrends();

}
document.addEventListener('DOMContentLoaded', documentReady);