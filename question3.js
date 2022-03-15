import urlExist from "url-exist";
import got from "got";
import cheerio from "cheerio";

// Question 3 (any language)
// Link Checker : You have a large HTML file. Inside that HTML are all kinds of HTML
// tags. Most importantly there are anchor/link tags.
// Write a program to find all of the URLs to which those link tags link and verify that the
// URLs return a 200 response.
// Note: Consider an HTML file containing 0 to 100+ links, so your solution should handle the case where there are plenty of links.
// Requirements
// First, you'll want to figure out a way to extract all of the URLs.
// Second, you'll want to test the URLs and report back to the user which are valid and which are not.
// Third, you'll want to make it really fast by checking the URLs concurrently or by parallelizing the checks. You might want to think about caching as well.

const extractLinks = async (url) => {
  try {
    // Fetching HTML
    const response = await got(url);
    const html = response.body;

    // Using cheerio to extract <a> tags
    const $ = cheerio.load(html);

    const linkObjects = $("a");

    // Collect the "href" of each link and add them to an array
    const links = [];
    linkObjects.each((index, element) => {
      links.push(
        $(element).attr("href") // get the href attribute
      );
    });

    return links;
  } catch (error) {
    console.log(error.response.body);
  }
};

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

async function checkHTML(baseURL) {
  const links = await extractLinks(baseURL);

  const allResults = [];

  links.forEach(async (element, index, array) => {
    // to differentiate between external url and internal url, I utilise isValidHttpUrl function
    if (!isValidHttpUrl(element)) {
      const result = await urlExist(baseURL + element);
      allResults.push({ url: baseURL + element, isValidUrl: result });
    } else {
      const result = await urlExist(element);
      allResults.push({ url: element, isValidUrl: result });
    }

    if (index === array.length - 1) {
      console.table(allResults);
    }
  });
}

const url = "http://books.toscrape.com/";
checkHTML(url);

export default isValidHttpUrl;
