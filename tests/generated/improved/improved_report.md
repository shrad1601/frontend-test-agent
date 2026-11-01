# Improved Test Run Report
Generated: 9/29/2026, 5:15:36 PM

## Summary
| Metric | Count |
|--------|-------|
| Total Tests | 3 |
| Passed | 2 |
| Failed | 0 |
| Errored/Timed Out | 1 |
| With Console Errors | 0 |

---

## Improvement Map
| Original Test | Improved Test | Error Category | Source |
|---|---|---|---|
| TC-CLIENT-003 | TC-IMP-001 | timeout | runner |
| TC-CLIENT-004 | TC-IMP-002 | timeout | runner |
| TC-CLIENT-009 | TC-IMP-003 | timeout | runner |

---

## Hard Errors (1)

### TC-IMP-001 — Submit the waitlist form on the Self-hosted page with valid data
- **Status:** error
- **Error:** Test timed out
- **Network Errors:** none
- **Console Errors:** none
- **Screenshot:** tests\generated\reports\screenshots\TC-IMP-001.png


---

## Failed Tests (0)
_None_

---

## AI Analysis
[analysis failed: OpenAI API error 401: {
    "error": {
        "message": "Incorrect API key provided: openaipl*****lder. You can find your API key at https://platform.openai.com/account/api-keys.",
        "type": "invalid_request_error",
        "param": null,
        "code": "invalid_api_key"
    }
}
]

---

## Passed Tests (2)
- TC-IMP-002: Submit the waitlist form without any input
- TC-IMP-003: Verify the successful API call when submitting the waitlist form.
