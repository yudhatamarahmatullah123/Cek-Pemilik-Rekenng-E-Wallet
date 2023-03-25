import axios from "axios";
import cheerio from "cheerio";

let bankScrapping = axios.get(`https://rfpdev.pro/`)
    .then((response) => {
        if (response.status == 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            let bank = [];
            $("table tbody tr").each(function (i, element) {
                if (i >= 0 && i <= 3) {
                    return null; // Melewatkan item di antara index 0 sampai 3
                }

                bank[i] = {
                    nama_bank: $(this).find("td:first-child").text().trim(),
                    kode_bank: $(this).find("td:last-child").text().trim()
                }
            });

            return bank;
        }
    }).catch((error) => console.log(error));

// bankScrapping.then((result) => {
//     return result;
// })
export default bankScrapping;

// console.log(dataBank);

