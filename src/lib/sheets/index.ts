import { google } from "googleapis";

// ==========================================
// Google Sheets Integration Guide
// ==========================================
// To enable real Google Sheets integration:
// 1. Create a Google Cloud Project and enable Google Sheets API.
// 2. Create a Service Account and download the JSON key.
// 3. Share your target Google Sheet with the Service Account email.
// 4. Add the following to your .env.local file:
//    GOOGLE_CLIENT_EMAIL="your-service-account-email@project.iam.gserviceaccount.com"
//    GOOGLE_PRIVATE_KEY="your-private-key" (Make sure to handle \n correctly)
//    SPREADSHEET_ID="your-spreadsheet-id"
// ==========================================

export async function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

// Mock Data
import { MOCK_PRODUCTS } from "../constants";

export async function getProducts() {
  // If no env variables are set, return mock data
  if (!process.env.SPREADSHEET_ID) {
    console.warn("No SPREADSHEET_ID found. Using mock data.");
    return MOCK_PRODUCTS;
  }

  try {
    const sheets = await getGoogleSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Products!A2:K', // Assuming row 1 is headers
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) return [];

    return rows.map(row => ({
      sku: row[0],
      name: row[1],
      category: row[2],
      subcategory: row[3],
      usp: row[4],
      description: row[5],
      mrp: Number(row[6]),
      price: Number(row[7]),
      status: row[8],
      image: row[9],
      highlights: row[10],
      shelfLife: row[11],
    }));
  } catch (error) {
    console.error('Error fetching products from Google Sheets:', error);
    return MOCK_PRODUCTS; // Fallback to mock data on error
  }
}
