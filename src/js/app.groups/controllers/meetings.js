function MeetingsController (GroupService, $stateParams) {

  let vm = this;
  vm.id = $stateParams.id;
  vm.addMeeting = addMeeting;

  function addMeeting (meeting) {
    console.log("add meeting was called")
    meeting.group_id = vm.id;
    GroupService.groupAddMeeting(meeting).then((resp) => {
      vm.addMeeting = resp.data;
      console.log(vm.addMeeting)
    });
  };

};

MeetingsController.$inject = ['GroupService', '$stateParams'];
export { MeetingsController };
