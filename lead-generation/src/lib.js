"use strict";
const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse/sync");
function clean(value) { return value == null ? "" : String(value).trim(); }
function number(value) { const n = Number(clean(value).replace(",", ".").replace(/[^\d.-]/g, "")); return Number.isFinite(n) ? n : 0; }
function bool(value) { return String(value).toLowerCase() === "true"; }
function normalizeUrl(value) { const url = clean(value); return url && !/^https?:\/\//i.test(url) ? `https://${url}` : url; }
function hostname(value) { try { return new URL(normalizeUrl(value)).hostname.toLowerCase(); } catch { return ""; } }
function isHost(host, domain) { return host === domain || host.endsWith(`.${domain}`); }
function classifyWebsite(value) {
  if (!clean(value)) return "none";
  const host = hostname(value); if (!host) return "invalid";
  const social = ["facebook.com", "instagram.com", "linkedin.com", "tiktok.com", "youtube.com", "twitter.com", "x.com"];
  const directories = ["booking.com", "waze.com", "paginasamarillas.es", "yelp.com", "tripadvisor.es", "tripadvisor.com", "cylex.es", "qdq.com", "11870.com", "hotfrog.es", "trustpilot.com"];
  if (social.some((domain) => isHost(host, domain))) return "social";
  if (directories.some((domain) => isHost(host, domain))) return "directory";
  return "own_website";
}
function readCsv(file) { return parse(fs.readFileSync(file, "utf8"), { columns: true, skip_empty_lines: true, bom: true, relax_column_count: true }); }
function csvCell(value) { const text = clean(value); return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text; }
function writeCsv(file, rows, columns) { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, [columns.join(","), ...rows.map((row) => columns.map((column) => csvCell(row[column])).join(","))].join("\n"), "utf8"); }
function escapeHtml(value) { return clean(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"); }
function phoneHref(value) { return clean(value).replace(/[^+\d]/g, ""); }
module.exports = { fs, path, clean, number, bool, normalizeUrl, hostname, classifyWebsite, readCsv, writeCsv, escapeHtml, phoneHref };
