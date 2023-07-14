const axios = require('axios');
const fs = require('fs');

const getComponentsWithoutLead = async () => {
  const { data: components } = await axios.get('https://herocoders.atlassian.net/rest/api/3/project/SP/components');

  return components.filter(component => !component.lead);
};

const getIssuesCountForComponent = async (component) => {
  const { data: { total } } = await axios.get(`https://herocoders.atlassian.net/rest/api/3/search?jql=project%20%3D%20SP%20AND%20component%20%3D%20${component.name}`);

  return total;
};

const getComponentAndIssuesCount = async () => {
  const componentsWithoutLead = await getComponentsWithoutLead();

  const componentsAndIssueCount = await Promise.all(componentsWithoutLead.map(async (component) => {
    const issuesCount = await getIssuesCountForComponent(component);

    return { name: component.name, issuesCount };
  }));

  return componentsAndIssueCount;
};

getComponentAndIssuesCount()
  .then(data => {
    fs.writeFile('output.txt', JSON.stringify(data, null, 2), err => {
      if (err) throw err;

      console.log('Data written to file');
    });
  })
  .catch(console.error);