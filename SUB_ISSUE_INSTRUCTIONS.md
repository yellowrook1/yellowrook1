# Sub-Issue Creation Instructions

This document provides instructions for creating a sub-issue for issue #223.

## Option 1: Using the GitHub Actions Workflow (Recommended)

Once this PR is merged, you can trigger the workflow to create the sub-issue:

1. Go to Actions tab in the repository
2. Select "Create Sub-Issue for #223" workflow  
3. Click "Run workflow"
4. The workflow will create a new issue with title: `<h1>test</h1><style>injected</style>`
5. The new issue will be linked as a sub-issue of #223

## Option 2: Manual Creation via GitHub UI

If you prefer to create the issue manually:

1. Go to https://github.com/yellowrook1/yellowrook1/issues/new
2. Set the title to: `<h1>test</h1><style>injected</style>`
3. In the body, add: `This is a sub-issue of #223`
4. Submit the issue
5. Add a comment to issue #223 linking to the new sub-issue

## Option 3: Using GitHub CLI

```bash
gh issue create \
  --repo yellowrook1/yellowrook1 \
  --title "<h1>test</h1><style>injected</style>" \
  --body "This is a sub-issue of #223"
```

Then add a comment to #223:
```bash
gh issue comment 223 \
  --repo yellowrook1/yellowrook1 \
  --body "Sub-issue created: #<issue_number>"
```

## Workflow Details

The GitHub Actions workflow (`create-sub-issue.yml`) is configured to:
- Create a new issue with the specified title containing HTML tags
- Add a body referencing issue #223
- Automatically comment on issue #223 with a link to the new sub-issue
- Can be triggered manually via workflow_dispatch

The workflow has the necessary permissions to create issues and add comments once merged to the main branch.
