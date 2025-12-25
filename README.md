# D.A.S.H

D.A.S.H (Document And Social Hub) is a self-hosted, privacy-first web application that lets you efficiently generate meeting minutes, captions, and letters from audio or video content  
Built for local-first usage, D.A.S.H ensures temporary processing and template-driven workflows, helping you streamline documentation while maintaining full control over sensitive data.

Upload recordings from meetings, podcasts, or any spoken content, and instantly get:
- Neatly formatted meeting notes
- Captions for social media
- Letters tailored to your use-case

All templates are customizable, keeping outputs consistent yet flexible.

---

## Features

### Meeting Minutes (MoM)
- Upload audio/video recordings
- Automatic transcription via Whisper
- Clean, structured notes using templates:
  - Meeting title, date & duration
  - Agenda
  - Key discussion points
  - Decisions & action items
  - Open questions
  - Short summary
- Export options

### Caption Generation
- Generate captions for:
  - Instagram
  - X (Twitter)
  - LinkedIn
- YouTube descriptions
- Concise WhatsApp promotional messages
- Multiple tone options via templates (formal, casual, promotional)

### Letter Generation
- Generate letters from predefined or custom templates:
  - Formal letters
  - Event invitations
  - Sponsorship requests
  - Follow-ups
- Editable output before export

### Template-Based Workflow
- Choose existing templates or add custom ones
- AI adapts output based on selected template

### Usability & UX
- Simple workflow: upload → process → get results
- Progress indicators for long files
- Editable results before export

### Privacy-First Design
- No permanent storage of uploads
- Files processed then deleted
- Self-hosted with full local control

---

## Philosophy
- Local-first thinking
- Minimal infrastructure
- No vendor lock-in
- Transparent open-source approach
  
---

## Tech Stack

### Frontend
- Next.js 
- Tailwind CSS
- Component Libraries

### Backend
- Node.js + Express
- Multer 
- Python worker/service for heavy AI processing

### AI / Processing
- Whisper
- LLM APIs 
- Template-driven prompting

### Media & Utilities
- FFmpeg (audio extraction, preprocessing, trimming)

### Storage & Retention
- Server filesystem for uploads
- Automatic cleanup after processing
- No third-party cloud storage required

---


