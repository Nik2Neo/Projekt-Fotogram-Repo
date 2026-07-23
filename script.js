function closeDialog(){
    dialogRef.close();
}

function changeDialog(currentId, goalId){
    const current = document.getElementById(currentId);
    const goal = document.getElementById(goalId);

    current.close();
    goal.showModal();
}
