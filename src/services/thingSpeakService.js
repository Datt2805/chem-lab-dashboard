export const fetchChannelData = async (channelId) => {
    const url = `https://api.thingspeak.com/channels/${channelId}/feeds.json?results=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};