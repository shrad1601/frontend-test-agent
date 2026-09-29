# API Fuzz Test Report
Generated: 6/25/2026, 4:40:52 PM

## Summary
| Metric | Count |
|--------|-------|
| Total Fuzz Tests | 6 |
| Anomalies Found | 0 |
| Server Crashes (5xx) | 0 |
| Timeouts | 0 |
| Stack Trace Leaks | 0 |

---

## 🔴 Anomalies Found (0)
_None_

---

## 📊 Endpoint Summary
### POST /j/collect?v=1&_v=j102&a=107233949&t=pageview&_s=1&dl=https%3A%2F%2Fdemoqa.com%2F&ul=en-us&dt=demosite&sr=1280x720&vp=1280x720&_u=YEBAAEABAAAAACAAI~&jid=821193854&gjid=1992844323&cid=1379930352.1782376603&tid=UA-109033876-1&_gid=413019956.1782376603&_r=1&_slc=1&gtm=45He66n1n81MX8DD4Sv855226469za200zd855226469&gcd=13l3l3l3l1l1&dma=0&tag_exp=0~115616985~115938466~115938468~119027224&z=1726621330 ✓
- Status codes observed: 200
- Tests run: 6
- Anomalies: 0

---

## 🤖 AI Analysis
[analysis not generated]

---

## ✅ Clean Results
- TC-FUZZ-001-A: POST /j/collect?v=1&_v=j102&a=107233949&t=pageview&_s=1&dl=https%3A%2F%2Fdemoqa.com%2F&ul=en-us&dt=demosite&sr=1280x720&vp=1280x720&_u=YEBAAEABAAAAACAAI~&jid=821193854&gjid=1992844323&cid=1379930352.1782376603&tid=UA-109033876-1&_gid=413019956.1782376603&_r=1&_slc=1&gtm=45He66n1n81MX8DD4Sv855226469za200zd855226469&gcd=13l3l3l3l1l1&dma=0&tag_exp=0~115616985~115938466~115938468~119027224&z=1726621330 with valid data → 200
- TC-FUZZ-001-B: POST /j/collect?v=1&_v=j102&a=107233949&t=pageview&_s=1&dl=https%3A%2F%2Fdemoqa.com%2F&ul=en-us&dt=demosite&sr=1280x720&vp=1280x720&_u=YEBAAEABAAAAACAAI~&jid=821193854&gjid=1992844323&cid=1379930352.1782376603&tid=UA-109033876-1&_gid=413019956.1782376603&_r=1&_slc=1&gtm=45He66n1n81MX8DD4Sv855226469za200zd855226469&gcd=13l3l3l3l1l1&dma=0&tag_exp=0~115616985~115938466~115938468~119027224&z=1726621330 with empty body → 200
- TC-FUZZ-001-C: POST /j/collect?v=1&_v=j102&a=107233949&t=pageview&_s=1&dl=https%3A%2F%2Fdemoqa.com%2F&ul=en-us&dt=demosite&sr=1280x720&vp=1280x720&_u=YEBAAEABAAAAACAAI~&jid=821193854&gjid=1992844323&cid=1379930352.1782376603&tid=UA-109033876-1&_gid=413019956.1782376603&_r=1&_slc=1&gtm=45He66n1n81MX8DD4Sv855226469za200zd855226469&gcd=13l3l3l3l1l1&dma=0&tag_exp=0~115616985~115938466~115938468~119027224&z=1726621330 with null values → 200
- TC-FUZZ-001-D: POST /j/collect?v=1&_v=j102&a=107233949&t=pageview&_s=1&dl=https%3A%2F%2Fdemoqa.com%2F&ul=en-us&dt=demosite&sr=1280x720&vp=1280x720&_u=YEBAAEABAAAAACAAI~&jid=821193854&gjid=1992844323&cid=1379930352.1782376603&tid=UA-109033876-1&_gid=413019956.1782376603&_r=1&_slc=1&gtm=45He66n1n81MX8DD4Sv855226469za200zd855226469&gcd=13l3l3l3l1l1&dma=0&tag_exp=0~115616985~115938466~115938468~119027224&z=1726621330 with very long string values → 200
- TC-FUZZ-001-E: POST /j/collect?v=1&_v=j102&a=107233949&t=pageview&_s=1&dl=https%3A%2F%2Fdemoqa.com%2F&ul=en-us&dt=demosite&sr=1280x720&vp=1280x720&_u=YEBAAEABAAAAACAAI~&jid=821193854&gjid=1992844323&cid=1379930352.1782376603&tid=UA-109033876-1&_gid=413019956.1782376603&_r=1&_slc=1&gtm=45He66n1n81MX8DD4Sv855226469za200zd855226469&gcd=13l3l3l3l1l1&dma=0&tag_exp=0~115616985~115938466~115938468~119027224&z=1726621330 with special characters → 200
- TC-FUZZ-001-F: POST /j/collect?v=1&_v=j102&a=107233949&t=pageview&_s=1&dl=https%3A%2F%2Fdemoqa.com%2F&ul=en-us&dt=demosite&sr=1280x720&vp=1280x720&_u=YEBAAEABAAAAACAAI~&jid=821193854&gjid=1992844323&cid=1379930352.1782376603&tid=UA-109033876-1&_gid=413019956.1782376603&_r=1&_slc=1&gtm=45He66n1n81MX8DD4Sv855226469za200zd855226469&gcd=13l3l3l3l1l1&dma=0&tag_exp=0~115616985~115938466~115938468~119027224&z=1726621330 with missing required fields → 200
