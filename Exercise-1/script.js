const companies = [
    { name: 'Intelliswift', hq: 'Newark, CA', indiaLocations: ['Pune', 'Bengaluru'] },
    { name: 'Salesforce', hq: 'San Francisco, CA', indiaLocations: ['Hyderabad', 'Bengaluru', 'Mumbai', 'Gurugram', 'Jaipur'] }
];

//task-1
console.log(companies.length);
for (let i = 0; i < companies.length; i++)
    console.log(companies[i].name);
for (let i = 0; i < companies.length; i++)
    console.log(companies[i].hq);

//task-2
function showInfo(){

    const companyInfoDiv=document.getElementById('companyinformation');
    // console.log('came into showInfo method')
    let outputHtmlSnippet='';
    outputHtmlSnippet+='<h3>Number of Companies: '+companies.length+'</h3>';
    outputHtmlSnippet+='<ol>'
    for (let i = 0; i < companies.length; i++)
    {
        let company=companies[i];
        outputHtmlSnippet+='<li>'+company.name+'-'+company.hq+'-'+company.indiaLocations.join(',') + '</li>'
    }
    outputHtmlSnippet+='</ol>'
    companyInfoDiv.innerHTML=outputHtmlSnippet;
}