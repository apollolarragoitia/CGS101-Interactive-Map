const apiKey = 'pk.eyJ1IjoiYXBvbGxvbGFycmFnb2l0aWEiLCJhIjoiY2xraTZwYXF0MDc5bDNnbzdjcmg3OW5jbSJ9.zibN6I73Uo9jZjownjcHrA';
var map = L.map('map').setView([19.622657, -155.528763], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 12,
    id: 'mapbox/outdoors-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

// Adding Marker
var manuaKea = L.marker([19.817880, -155.472562]).addTo(map);
var pearlHarbor = L.marker([21.351481587644983, -157.98023612520393]).addTo(map);
var redHill = L.marker([21.37196998359149, -157.90527780000002]).addTo(map);
var waimeaRiver = L.marker([21.641493499031373, -158.06303495150456]).addTo(map);
var sidebar = L.control.sidebar('sidebar', {
    position: 'left'
});

map.addControl(sidebar);

let manuaKeaHtml = `
<h1> The Violation of Manua Kea </h1>
Mauna Kea, the site of one the largest astronomical observatory, is the site of a sacred landscape. Representative of an umbilical cord, tying the Hawaiian island chain to the heavens, the site itself is seen as the progenesis of the Hawaiian people. The site is a spiritually important land. “... the sacred summit remains a wao akua, of Wākea (“Sky Father” to all Hawaiians) and the piko (umbilical cord) of the island-child, Hawaii, connecting the land to the heavens on the highest point in the Pacific.” ( Kahea Hawaiian Environmental Alliance). In 1968, a United States-owned Land Board permitted the construction of an observatory on Mauna Kea. Despite countless protests and resistance by the native people, construction continued. From 1968 to 2002, countless telescopes, many of which remain unused to this day, were constructed – several of them lacking permits or approval from the Land Board. Despite protests and continued protests, several narratives and optics have been used by non-native Hawaiians to justify the construction of these projects on sacred sites. Institutions of power in Hawaii owned by the American government acknowledge the struggles and protests of these people for the sovereignty of their own sacred land, they persist either way out of a ‘greater good’. This sentiment of a ‘greater good’ has been used as a narrative to continue to push and shoot down the interests of Native people. In the media, a narrative was constructed that the Hawaiins opposing the construction of and development of these projects on Native Land were opposing progress, not the protection of their own tradition. This sentiment is reflective of a settler-colonizer mindset, viewing the protection of people's lands as outdated. The wants of the settler-colonizer come first, seen and presented as needs. It views its own progress as fundamental and paramount to the furtherment of society, viewing the cost it comes to the natives as a by-product of expansion. intimately aware of the risk many of these projects bring to the Native people, they continue. Oppression and destruction of people, exploiting them for gain is still present. They are still colonizers practicing colonialism. 
<h3> Sources and Recommended Readings </h3>
<ul>
<li>Mauna Kea Protests Are Part of a Long Fight Against Colonialism</li>
<li>Fighting the battle of Double Colonization: The View of a Hawaiian Feminist</li>
<li>Manua Kea Timeline by Kahea, a Hawaiian-Environmental Alliance</li>
</ul> 
`

let pearlHarborHtml =`
<h1> RIMPAC: The Practice of Violence </h1>

RIMPAC is a multinational military exercise hosted in the island chain of Hawaii. RIMPAC is a display of power. It serves to mentally disempower those that oppose the United States government. Since the inception and practice of RIMPAC, the toll it has taken on those living in Hawaii is apparent. RIMPAC is strongly correlated with the following increase in Violence Against Women, including trafficking and destruction of the environment These wargames are disruptive to the fragile reef ecosystems of the island. Wargames often entail a variety of military technology and realistic scenarios where militaries will participate in practice invasions. The usage of sonar, which is vital in aquatic military missions, has been shown to negatively impact marine wildlife. Many aquatic animals rely on sonar for navigation or communication such as whales or dolphins. Constant sonar usage has been shown to be extremely disruptive to whales– the sounds of the sonar being so stressful that many whales beach themselves and subject themselves to dangerous and rapid changes in elevation as well as beaching just to escape it. The 2004 RIMPAC wargames resulted in nearly 200 beached whales in Hanalei Bay. 


<h2>The Mindset Behind Allowing This</h2>
Like many other events in the history of Hawaii, including contemporary, the government is very much aware of the effects it has on the people and land it operates on. Yet despite the land of Hawaii being a living, breathing place, its sole purpose is for the self-propagation of the United States Empire. It is the feminization of Hawaii from the Western perspective that provides the self-justification in the eyes of a predatory militaristic government to ‘pimp’ out the island to self-entitled militourists. 

<h3> Sources and Recommended Readings </h3>
<ul>
<li>A Call to Cancel RIMPAC in Hawaiʻi</li>
<li> <a href="https://www.biologicaldiversity.org/news/press_releases/2015/pacific-sonar-testing-11-12-2015.html</a> </li>
<li> <a href="https://www.theguardian.com/environment/2013/jul/03/whales-flee-military-sonar-strandings">Navy to Reassess Pacific Training That Endangers Whales, Dolphins, Other Marine Life </a> </li>
<li> <a href="https://vowpeace.org/cancel-rimpac-2020/">Cancel RIMPAC 2020</a> </li>
<li>Manua Kea Timeline by Kahea, a Hawaiian-Environmental Alliance</li>
</ul> 
`

let redHillHtml = `
<h1>The Fight for Clean Water</h1>
Redhill is another by-product of the illegal occupation of Hawaii. In 1942 a fuel storage facility was built upon the location of Redhill during World War II. Throughout the years, the fuel storage at this facility was slowly leaking into the aquifer.
In January 2014, roughly 27,000 gallons of jet fuel leaked from the storage facility, resulting in contamination of nearby soil and surface-level water.
A second contamination incident occurred in May of 2021, where petroleum stored in Red Hill had leaked inside of the base, collecting within the fire suppression system as a reservoir.
In November of 2021, the fuel which was stored in the drain line of the fire suppression system leaked into the nearby aquifer, resulting in the contamination of the aquifer used for drinking water.

This incident is just one of several incidents where purposeful negligence was at play. Several private reports before the leakage in 2021 had suggested that the Redhill Storage Reservoir was prone to such an accident. Despite this, the U.S. Navy refused to address the issue until the leaks.

<h3> Sources and Recommended Readings </h3>
<ul>
<li> <a href="https://www.civilbeat.org/2022/02/red-hills-firefighting-system-was-damaged-long-before-contamination-crisis"/</a>Red Hill’s Firefighting System Was Damaged Long Before Contamination Crisis </li>
<li> <a href="https://www.civilbeat.org/2022/06/red-hill-investigations-the-navy-failed-to-prevent-and-respond-to-fuel-contamination/">Red Hill Investigations: The Navy Failed To Prevent And Respond To Fuel Contamination </a> </li>
</ul> 

`


let waimeaRiverHtml = `        <h1>Waimea River: James Cook Landing Site</h1>

<h2>An Illegal Occupation</h2>
    Following contact, indigenous populations severely declined due to disease, resulting in a severe drop in the population of natives as well as a decline in birth rates. Over time, the economically lucrative potential of the islands became apparent to businessmen of the West, prompting an illegal occupation in 1893 by the United States military in support of businessmen looking to set up sugar and pineapple plantations. The overthrow of Queen Liliuokalani marked the end of Hawaiian sovereignty.  By 1900, the Hawaii island chain had become a territory of the United States.<br />

    This occupation aimed to erase Hawaiian culture and enforce the hetero-patriarchy in the native Hawaiian population. The languages of the islands were banned, and the land of sacred meaning had been turned into plantations and capital for the West looking to exploit the land for its resources and wealth. <br />

    As the lucrative profits of plantations began to decline, those in power still did not release Hawaii.
    They began to exploit the people and their culture for wealth. A culture once forced to live in secrecy was now forced to perform for colonizing visitors in a form of cultural prostitution. For example, the dance of hula. These activities once banned are now performed by native Hawaiians under the duress of capitalist pressures. <br />

    As cultural prostitution has propagated, the enforcement of Western ideas has taken place since first contact. The hetero-patriarchy, a tool of control used to instill ideas of faux gender inferiority was introduced and propagated– a sudden shift to a society where women were not allowed to exist in an autonomous state of self-governance and power. The egalitarian society of pre-contact was conducive to a woman's independence. Women were seen as more than just objects of sex and reproduction as they are seen in the West. They held powerful positions in society, both as leaders and in religion. Women were not solely defined by their gender and were not bound to a singular role or job as a result of it.<br />

    Today, Hawaii continues to be occupied illegally by the United States – the island chain is primarily used as a base of operations by the United States military. It continues to serve and demonstrate power and violence over those who have called the island chain home for over 4,000 years. It is a reminder that the United States aims to maintain control through fear and violence; subduing the population of native Hawaiians through the brutal and slow erasure of their culture.

    <h3> Sources and Recommended Readings </h3>
<ul>
<li>Mauna Kea Protests Are Part of a Long Fight Against Colonialism</li>
<li>Fighting the battle of Double Colonization: The View of a Hawaiian Feminist</li>
<li>Manua Kea Timeline by Kahea, a Hawaiian-Environmental Alliance</li>
</ul> `

manuaKea.on('click', function () {
    sidebar.setContent(manuaKeaHtml);
    sidebar.show();
});

pearlHarbor.on('click', function () {
    sidebar.setContent(pearlHarborHtml);
    sidebar.show();
});

waimeaRiver.on('click', function () {
    sidebar.setContent(waimeaRiverHtml);
    sidebar.show();
});

setTimeout(function () {
    sidebar.show();
}, 500); 
