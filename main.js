
const info = document.querySelector('.card-info');
const shareM = document.querySelector('.mobile');
const shareDesk = document.querySelector('.desktop');


info.addEventListener('click', ShareMobile);
info.addEventListener('click', ShareDesktop);


function ShareMobile () {
    const isShareDeskClosed = shareDesk.classList.contains('inactive');
    if (!isShareDeskClosed) {
        shareDesk.classList.add('inactive');
    }
    info.classList.add('inactive');
    shareM.classList.remove('inactive');
}

function ShareDesktop () {
    shareDesk.classList.remove('inactive');

}