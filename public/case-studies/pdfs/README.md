# Case Study PDFs

Place your case study PDF files in this directory.

## Naming Convention

Each PDF must be named to match its Sanity slug:

```
{slug}.pdf
```

### Examples

If your case study in Sanity has `slug: "fleet-tracking-system"`, the file should be:

```
fleet-tracking-system.pdf
```

The API at `/api/case-study-download` will automatically find and attach the PDF based on the slug. If a PDF is not found, the user will receive an email asking them to wait for a follow-up.
