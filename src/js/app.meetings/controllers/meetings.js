function MeetingsController (MeetingService, $stateParams) {

  let vm = this;
  vm.id = $stateParams.id;
  vm.meeting = {};
  vm.member = {};
  vm.addMtgMember = addMtgMember;

  function addMtgMember () {
    console.log("hi from meeting")
    MeetingService.meetingAddMember(vm.id).then((resp) => {
      vm.member = resp.data;
      console.log(vm.member)

    });
  };

  // function meetingDetail (meeting) {
  //   console.log("meeting detail was called")
  //   meeting.group_id = vm.id;
  //   GroupService.groupMeetingList(meeting).then((resp) => {
  //     vm.meetingDetail = resp.data;
  //     console.log(vm.meetingDetail)
  //   });
  // };
  //

};

MeetingsController.$inject = ['MeetingService', '$stateParams'];
export { MeetingsController };
