const dividers = document.querySelectorAll('#announcements-list li');

function manageUnclickedAnnouncements(unclickedAnnouncements) {
    unclickedAnnouncements.forEach(unclickedAnnouncement => {
        var parent = unclickedAnnouncement.parentNode;
        parent.classList.toggle('hidden-announcement');
    });

    dividers.forEach(divider => {
        const currentDividerVisibility = divider.style.getPropertyValue('--dividerVisibility');
        const newDividerVisibility = currentDividerVisibility === 'hidden' ? 'visible' : 'hidden';
        
        divider.style.setProperty('--dividerVisibility', newDividerVisibility);
    });
}
    

function manageClickedAnnouncement(clickedAnnouncement) {
    clickedAnnouncement.classList.toggle('truncate-announcement');
    clickedAnnouncement.classList.toggle('main-announcement');
    
    var allAnnouncements = document.querySelectorAll('.announcement');
    var restAnnouncements = Array.from(allAnnouncements).filter(announcement => announcement !== clickedAnnouncement);
   
    manageUnclickedAnnouncements(restAnnouncements);
  }