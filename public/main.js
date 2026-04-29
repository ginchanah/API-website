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