let role = "guest";

switch (role) {
	case "guest":
		role = "Guest User";
		break;

	case "moderator":
		role = "Moderator User";
		break;

	default:
		role = "Unknown User";
}

console.log(role);

if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator User");
else console.log("Unknown User");
