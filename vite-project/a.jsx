const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/projects", { // replace URL with your backend endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit project");
    }

    const result = await response.json();
    console.log("Server response:", result);
    alert("Project submitted successfully!");
  } catch (error) {
    console.error("Error submitting project:", error);
    alert("Error submitting project. Please try again.");
  }
};
