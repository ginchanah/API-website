// // source: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-manual/


// /*
//  *   This content is licensed according to the W3C Software License at
//  *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
//  *
//  *   File:   tabs-manual.js
//  *
//  *   Desc:   Tablist widget that implements ARIA Authoring Practices
//  */
// console.log("hello")

// 'use strict';

// class TabsManual {
//   constructor(groupNode) {
//     this.tablistNode = groupNode;

//     this.tabs = [];

//     this.firstTab = null;
//     this.lastTab = null;

//     this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
//     this.tabpanels = [];

//     for (var i = 0; i < this.tabs.length; i += 1) {
//       var tab = this.tabs[i];
//       var tabpanel = document.getElementById(tab.getAttribute('aria-controls'));

//       tab.tabIndex = -1;
//       tab.setAttribute('aria-selected', 'false');
//       this.tabpanels.push(tabpanel);

//       tab.addEventListener('keydown', this.onKeydown.bind(this));
//       tab.addEventListener('click', this.onClick.bind(this));

//       if (!this.firstTab) {
//         this.firstTab = tab;
//       }
//       this.lastTab = tab;
//     }

//     this.setSelectedTab(this.firstTab);
//   }

//   setSelectedTab(currentTab) {
//     for (var i = 0; i < this.tabs.length; i += 1) {
//       var tab = this.tabs[i];
//       if (currentTab === tab) {
//         tab.setAttribute('aria-selected', 'true');
//         tab.removeAttribute('tabindex');
//         this.tabpanels[i].classList.remove('is-hidden');
//       } else {
//         tab.setAttribute('aria-selected', 'false');
//         tab.tabIndex = -1;
//         this.tabpanels[i].classList.add('is-hidden');
//       }
//     }
//   }

//   moveFocusToTab(currentTab) {
//     currentTab.focus();
//   }

//   moveFocusToPreviousTab(currentTab) {
//     var index;

//     if (currentTab === this.firstTab) {
//       this.moveFocusToTab(this.lastTab);
//     } else {
//       index = this.tabs.indexOf(currentTab);
//       this.moveFocusToTab(this.tabs[index - 1]);
//     }
//   }

//   moveFocusToNextTab(currentTab) {
//     var index;

//     if (currentTab === this.lastTab) {
//       this.moveFocusToTab(this.firstTab);
//     } else {
//       index = this.tabs.indexOf(currentTab);
//       this.moveFocusToTab(this.tabs[index + 1]);
//     }
//   }

//   /* EVENT HANDLERS */

//   onKeydown(event) {
//     var tgt = event.currentTarget,
//       flag = false;

//     switch (event.key) {
//       case 'ArrowLeft':
//         this.moveFocusToPreviousTab(tgt);
//         flag = true;
//         break;

//       case 'ArrowRight':
//         this.moveFocusToNextTab(tgt);
//         flag = true;
//         break;

//       case 'Home':
//         this.moveFocusToTab(this.firstTab);
//         flag = true;
//         break;

//       case 'End':
//         this.moveFocusToTab(this.lastTab);
//         flag = true;
//         break;

//       default:
//         break;
//     }

//     if (flag) {
//       event.stopPropagation();
//       event.preventDefault();
//     }
//   }

//   // Since this example uses buttons for the tabs, the click onr also is activated
//   // with the space and enter keys
//   onClick(event) {
//     this.setSelectedTab(event.currentTarget);
//   }
// }

// // Initialize tablist

// window.addEventListener('load', function () {
//   var tablists = document.querySelectorAll('[role=tablist].manual');
//   for (var i = 0; i < tablists.length; i++) {
//     new TabsManual(tablists[i]);
//   }
// });


const tabs = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function showTab(clickedTab) {
    const targetId = clickedTab.getAttribute('aria-controls');

    // set aria-selected on the tab that is active
    tabs.forEach(tab => {
        // if the selected tab matches the tab in the loop 
        const isActive = clickedTab === tab;
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // show the panel that matches the tab ID
    tabPanels.forEach(panel => {
        if (panel.id === targetId) {
            panel.classList.remove('is-hidden');
        } else {
            panel.classList.add('is-hidden');
        }
    });
}

tabs.forEach(clickedTab => {
    clickedTab.addEventListener('click', () => showTab(clickedTab));
});