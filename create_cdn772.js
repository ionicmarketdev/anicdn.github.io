const axios = require('axios');
const buckets = [
  'media.trashyimg.de', 'media.trescothik.de', 'media.vanhauvn.com', 'media.waschmittelcoupon.de', 'media.wilzefr.com', 'media.windlm.de', 'media.wozniaito.com', 'media2.forazeroth.de', 'megalos.mailcommerce', 'mercury-test2', 'motiveren-van-jezelf.be', 'multilex-new-lp', 'multilex-policadori', 'multilex.group', 'nerienregretter.fr', 'newstomorrow.de', 'oldclock.de', 'optinpageforuk', 'panel-of-experts.be', 'pertosencom', 'pikonede', 'placevibe', 'prontaesclusivita.it', 'psms-policadori', 'purenews.be', 'pureread.de', 'quesepacom', 'readship.de', 'riijkscom', 'ritosoncom', 'rivieremysterieuse.fr', 'ry-auscom', 'salesbuttlers-policadori', 'set-of-standards.be', 'shopping.d-gewinnspiele.com', 'sima-online', 'simbuyas', 'smslux-gkb', 'spar-policadori', 'spar.advisor', 'stay-in-budget', 'suffatocom', 'tankgutschein.d-gewinnspiele.com', 'tayllecom', 'the-advisr-2.0', 'the-advisr-git-2-s3-keybucket-lqikavgjvi0l', 'the-advisr-git-2-s3-lambdazipsbucket-j85nnak02mit', 'the-advisr-smava', 'theadvisr-enviando', 'theadvisr-nofooter', 'topbluemail.de', 'tradingnewsus.com', 'treaction-template', 'tribe-of-natives.nl', 'tuchenepensi.it', 'undrsend.de', 'unsubscribe-page', 'untiltmrnews.de', 'vanhauvncom', 'versicherungsratgeber.eu', 'vgvfi-policadori', 'vudihaus.de', 'waschmittelcouponde', 'widnsdecom', 'wilzefrcom', 'windlmde', 'wohnenheute.eu', 'wozniaitocom', 'www.businessognigiorno.it'
];

const requestApi = async (bucket) => {
  const data = {
    'method': 'POST',
    'path': 'origin/aws',
    'params': {
      'id': '',
      'host': 's3.amazonaws.com',
      'base_dir': '/' + bucket,
      'scheme': 'https',
      'label': bucket
    }
  };
  const config = {
    method: 'post',
    url: 'https://client.cdn77.com/client-api/public',
    headers: {
      'Cookie': '_hjSessionUser_1617889=eyJpZCI6IjM5NmU2MTRjLTZmOTUtNTYwNy05MjQ0LWM5NjYzZjgzZGM1YiIsImNyZWF0ZWQiOjE2NDI1NzUyMjEyOTksImV4aXN0aW5nIjp0cnVlfQ==; REMEMBER_ME=Q2RuNzdcQ3JvcFxFbnRpdHlcQWNjb3VudDpibWx1YUVCaGRXUnBaVzVqWlhObGNuWXVZMjl0OjE2NzQxMTEyNjQ6ZjI5N2Y0MGZkMzRjMGIwMDBlZTFkNzJiMWY5ODJjNzk5NDY5MjkzNWY4YjM0NDYxODE4Mzc1ZWQxNWVmZDlkZA%3D%3D; customer=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDI1NzUyNjQuMzk3OTcsImlzcyI6Imh0dHBzOi8vY2xpZW50LmNkbjc3LmNvbSIsImF1ZCI6Ii5jZG43Ny5jb20iLCJlbWFpbCI6Im5pbmhAYXVkaWVuY2VzZXJ2LmNvbSIsImlkIjo4NzU3NiwiZnVsbE5hbWUiOiJMZSBIYWkgTkluaCIsImxlYWRTY29yZSI6bnVsbCwidXNlcl9oYXNoIjoiNGJiMWRhYTg4NWE2YWQxYzdkY2ExYTg2N2RhY2Q4NzFjMjlkYTcwZjFkNjc1MDM3NmRmMzJlMTE5NTE3YzIyYiJ9.nebHDPM5j8QXdxDv_R6_ou8IEcY8mxW6jfPD4bzCGLM; _gid=GA1.2.189712957.1642982003; _ga=GA1.2.957048495.1642575221; PHPSESSID=ijsgq4k6ooarchs27h7804sq3k; _ga_C2MNDER92Z=GS1.1.1643102954.14.1.1643107112.31; _dc_gtm_UA-29220065-1=1; PHPSESSID=c6545of3dcpug27vmr1247mt8g',
      'Content-Type': 'application/json'
    },
    data: data
  };
  const response = await axios(config);
  console.log(response.data);
};

(async () => {
  for (const bucket of buckets) {
    await requestApi(bucket);
  }
})();