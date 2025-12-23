module.exports = {
  event: 'promote',
  handle: async ({ api, event }) => {
    const promotedMembers = event.participants;
    console.log(event);
    for (const member of promotedMembers) {
      await api.sendMessage(event.id, {
        text: `🎉 Congratulations @${member.split('@')[0]}! তোমার নিউ এডমিন দেওয়া ওইছে!`,
        mentions: [member]
      });
    }
  }
};
