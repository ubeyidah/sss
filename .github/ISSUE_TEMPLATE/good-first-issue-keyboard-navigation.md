---
name: Good First Issue - Add Keyboard Navigation to Playground
about: Add keyboard support (Enter key) to create/update folders in the Playground dialog
title: 'Add keyboard navigation support to folder creation dialog'
labels: 'good first issue, enhancement, ui, accessibility'
assignees: ''
---

## 📋 Issue Description

Currently, in the Playground section, when users want to add or edit a folder name using the dialog, they must click the "Create" or "Update" button with their mouse. This creates a suboptimal user experience as users cannot simply press the Enter key after typing the folder name to submit the form.

## 🎯 Goal

Add keyboard navigation support so users can press the Enter key to submit the folder creation/update form, improving accessibility and user experience.

## 📍 Location

File: `/app/_components/create-folder.tsx`

## 🔍 Current Behavior

1. User clicks "Add Folder" button
2. Dialog opens with an input field
3. User types folder name
4. User **must click** the "Create" button to submit
5. Pressing Enter does nothing

## ✅ Expected Behavior

1. User clicks "Add Folder" button
2. Dialog opens with an input field
3. User types folder name
4. User presses **Enter key** OR clicks "Create" button
5. Folder is created/updated and dialog closes

## 🛠️ Technical Details

### What needs to be changed:

In the `create-folder.tsx` component, locate the Input field that looks like this:

```tsx
<Input
  id="folder-name"
  value={newFolderName}
  onChange={(e) => setNewFolderName(e.target.value)}
  placeholder="e.g., Projects"
  className="capitalize"
/>
```

**Solution:** Add an `onKeyDown` event handler to detect when the Enter key is pressed:

```tsx
<Input
  id="folder-name"
  value={newFolderName}
  onChange={(e) => setNewFolderName(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCreate();
    }
  }}
  placeholder="e.g., Projects"
  className="capitalize"
/>
```

**Note:** The `e.preventDefault()` prevents the default form submission behavior, and the existing `handleCreate()` function already includes validation to reject empty or whitespace-only input.

### Testing your changes:

1. Run the development server: `bun dev`
2. Navigate to http://localhost:3000
3. Scroll to the Playground section
4. Click "Add Folder" button
5. Type a folder name (e.g., "Testing")
6. Press Enter key
7. Verify the folder is created and dialog closes
8. Repeat test with "Edit" functionality by clicking the pencil icon on an existing folder

## 📚 Helpful Resources

- [React Documentation - Handling Events](https://react.dev/learn/responding-to-events)
- [KeyboardEvent.key Documentation](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
- Project Contributing Guide: [CONTRIBUTING.md](../../CONTRIBUTING.md)

## 💡 Acceptance Criteria

- [ ] Pressing Enter in the input field calls the `handleCreate()` function
- [ ] The behavior works for both "Add Folder" and "Edit Folder" modes
- [ ] The dialog closes after pressing Enter (same as clicking the button)
- [ ] Empty or whitespace-only input is still rejected (existing validation remains)
- [ ] No console errors when pressing Enter
- [ ] Manual testing confirms the feature works as expected

## 🏷️ Labels

- `good first issue` - Perfect for first-time contributors
- `enhancement` - Adding new functionality
- `ui` - User interface improvement
- `accessibility` - Makes the app more accessible

## 💬 Questions?

Feel free to ask questions in the comments! We're here to help you make your first contribution.

---

**Happy coding! 🚀**
