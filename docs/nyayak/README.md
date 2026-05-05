# Nyayak Report Generator

This folder contains the JavaScript-based report generator and assets for the CSIT final project report.

## Files

- `nyayak_report.js`: Generates the DOCX report using the `docx` package.
- `Nyayak_Project_Report.docx`: Generated Word document output.
- `Nyayak_Project_Report.pdf`: Generated PDF output.
- Supporting assets: `tu_logo.png`, `logo.png`, `architecture.png`, `flowchart.png`, `gantt.png`, `usecase.svg`.

## Prerequisites

- Node.js
- npm
- LibreOffice CLI (`libreoffice` command)

## Generate the Report

From the project root:

```bash
node docs/nyayak/nyayak_report.js
```

This creates:

- `docs/nyayak/Nyayak_Project_Report.docx`

## Convert DOCX to PDF

From the project root:

```bash
libreoffice --headless --convert-to pdf --outdir docs/nyayak docs/nyayak/Nyayak_Project_Report.docx
```

This creates:

- `docs/nyayak/Nyayak_Project_Report.pdf`

## One-Command Workflow

From the project root:

```bash
node --check docs/nyayak/nyayak_report.js \
	&& node docs/nyayak/nyayak_report.js \
	&& libreoffice --headless --convert-to pdf --outdir docs/nyayak docs/nyayak/Nyayak_Project_Report.docx
```

## Notes

- Update placeholders in `nyayak_report.js` such as supervisor details before final submission.
- The report now writes output to this folder (not system-protected paths), so generation works without elevated permissions.
