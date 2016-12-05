function MeetingsController (GroupService, $stateParams) {

  let vm = this;
  vm.id = $stateParams.id;
  vm.addMeeting = addMeeting;
  vm.meetingDetail = meetingDetail;

  function addMeeting (meeting) {
    console.log("add meeting was called")
    meeting.group_id = vm.id;
    GroupService.groupAddMeeting(meeting).then((resp) => {
      vm.addMeeting = resp.data;
      console.log(vm.addMeeting)
    });
  };

  function meetingDetail (meeting) {
    console.log("meeting detail was called")
    meeting.group_id = vm.id;
    GroupService.groupMeetingList(meeting).then((resp) => {
      vm.meetingDetail = resp.data;
      console.log(vm.meetingDetail)
    });
  };


};

MeetingsController.$inject = ['GroupService', '$stateParams'];
export { MeetingsController };
