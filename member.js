function skillsMember () {
  var member = this;
  member.skills = [];
  member.addSkill = addSkill;
  member.removeSkill = removeSkill;
  member.updateSkill = updateSkill;
  member.getSkills = getSkills;

  function addSkill (skill) {
    member.skills.push(skill);
  }

  function removeSkill (skill) {
    var index = member.skills.indexOf(skill);
    if (index > -1) {
      member.skills.splice(index, 1);
    }
  }

  function updateSkill (oldSkill, newSkill) {
    var index = member.skills.indexOf(oldSkill);
    if (index > -1) {
      member.skills[index] = newSkill;
    }
  }

  function getSkills () {
    return member.skills;
  }
}