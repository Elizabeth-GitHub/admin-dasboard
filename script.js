function manageUnclickedAnnouncements(unclickedAnnouncements) {
    console.log(unclickedAnnouncements.length);
    unclickedAnnouncements.forEach(unclickedAnnouncement => {
        var parent = unclickedAnnouncement.parentNode;
        parent.classList.toggle('hide-announcement');
    });       
};
    

function manageClickedAnnouncement(clickedAnnouncement) {
    clickedAnnouncement.classList.toggle('truncate');
    
    var allAnnouncements = document.querySelectorAll('.announcement');
    var restAnnouncements = Array.from(allAnnouncements).filter(announcement => announcement !== clickedAnnouncement);
   
    manageUnclickedAnnouncements(restAnnouncements);
  }