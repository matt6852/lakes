export function SendEmail(data) {
  return fetch("/api/contacts", {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
}

export function SendDataToCrm(data) {
  const hash = process.env.HASH_ROCKET_CRM;
  const url = 'https://b2b.rocketcrm.bz/api/channels/site/form?hash=' + hash;
  const body = {
    ...data
  };

  const docCookies = document.cookie;

  if (docCookies && docCookies !== '') {
    const cookiesSplit = docCookies.split(';');

    body.cookies = cookiesSplit.map(cookie => {
      let cookieSplit = cookie.split('=');

      return {
        name: decodeURIComponent(cookieSplit[0]).replace(/\s/g, ''),
        value: decodeURIComponent(cookieSplit[1])
      };
    })
  }

  return fetch(url, {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
}