const _ENCODED_CODE_ = `Ly8gRmlyZWJhc2UgaW1wb3J0cwppbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAiaHR0cHM6
Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy8xMC4xMi4wL2ZpcmViYXNlLWFwcC5qcyI7Cmlt
cG9ydCB7CiAgZ2V0RmlyZXN0b3JlLAogIGRvYywKICBnZXREb2MsCiAgY29sbGVjdGlvbiwKICBz
ZXJ2ZXJUaW1lc3RhbXAsCiAgcXVlcnksCiAgd2hlcmUsCiAgZ2V0RG9jcywKICBydW5UcmFuc2Fj
dGlvbiwKICBzZXREb2MsCiAgdXBkYXRlRG9jLAogIGRlbGV0ZURvYwp9IGZyb20gImh0dHBzOi8v
d3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvMTAuMTIuMC9maXJlYmFzZS1maXJlc3RvcmUuanMi
OwoKaW1wb3J0IHsKICBnZXRBdXRoLAogIG9uQXV0aFN0YXRlQ2hhbmdlZAp9IGZyb20gImh0dHBz
Oi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvMTAuMTIuMC9maXJlYmFzZS1hdXRoLmpzIjsK
CmltcG9ydCB7IGZpcmViYXNlQ29uZmlnIH0gZnJvbSAiLi9maXJlYmFzZS1jb25maWcuanMiOwoK
Ly8gSW5pdGlhbGl6ZSBGaXJlYmFzZQpjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNl
Q29uZmlnKTsKY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTsKY29uc3QgYXV0aCA9IGdldEF1
dGgoYXBwKTsK...`;

(async () => {
  try {
    const decoded = atob(_ENCODED_CODE_.replace(/\s+/g, ""));
    const blob = new Blob([decoded], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    await import(url);
    URL.revokeObjectURL(url);
  } catch (e) {
    console.error(e);
  }
})();
