# Turners Car Insurance API Project

This project implements RESTful APIs for Turners Car Insurance as part of a Test-Driven Development (TDD) approach. The project focuses on two critical APIs in the insurance purchasing process.

## Implemented APIs

### 1. Car Value Calculator API

Calculates a car's suggested value based on its model and year.

#### Input Format

```json
{
  "model": "Civic",
  "year": 2014
}
```

#### Output Format

```json
{
  "car_value": 6614
}
```

#### Business Logic

The car value is calculated by:

1. Taking each letter in the model name
2. Finding its position in the alphabet (A=1, Z=26)
3. Adding up all positions and multiplying by 100
4. Adding the year value

Example: "Civic" 2014

- C(3) + I(9) + V(22) + I(9) + C(3) = 46
- (46 × 100) + 2014 = 6,614

### 2. Risk Rating Calculator API

Assesses driver risk based on claim history description.

#### Input Format

```json
{
  "claim_history": "My only claim was a crash into my house's garage door that left a scratch on my car."
}
```

#### Output Format

```json
{
  "risk_rating": 3
}
```

#### Business Logic

- Risk rating (1-5) is calculated by counting occurrences of specific keywords
- Keywords: "collide", "crash", "scratch", "bump", "smash"
- Each occurrence adds 1 to the risk rating
- Maximum rating is 5 (high risk)
- Minimum rating is 1 (low risk)

## Project Structure

```
├── api1/
│   ├── carValue.js         # Car value calculation logic
│   ├── carValue.txt        # Task 5 Test cases
│   ├── carValueRoute.js    # API routes for car value
├── api2/
│   ├── claimHistory.txt         # Task 5 Test cases
│   ├── claimHistoryHelper.js    # Risk rating calculation logic
│   ├── claimHistoryRoute.js     # API routes for risk rating
├── server.js               # Main server file
├── server.test.js         # Server tests
├── carValue.test.js       # Car value API tests
```

## Technologies Used

- Node.js
- Express.js
- Jest (Testing Framework)
- Supertest (API Testing)

## Test-Driven Development

This project follows TDD principles:

1. Write failing tests first
2. Implement code to make tests pass
3. Refactor while maintaining test coverage

Example test cases for Car Value API:
| Test Case | Input | Expected Output | Description |
|-----------|-------|-----------------|-------------|
| 1 | {"model": "Civic", "year": 2020} | {"car_value": 6620} | Happy path |
| 2 | {"model": "911", "year": 2020} | {"car_value": 2020} | Numbers in model name |
| 3 | {"model": "Task-Force", "year": -987} | {"error": "there is an error"} | Negative year |
| 4 | {"model": "C200", "year": "twenty twenty"} | {"error": "there is an error"} | Invalid year format |

Example test cases for Risk Rating API:
| Test Case | Input | Expected Output | Description |
|-----------|-------|-----------------|-------------|
| 1 | {"claim_history": "No incidents in the past 3 years"} | {"risk_rating": 1} | Happy path - clean history |
| 2 | {"claim_history": "One crash and one scratch incident"} | {"risk_rating": 2} | Multiple incidents |
| 3 | {"claim_history": "Had a crash, then a smash, and another crash"} | {"risk_rating": 3} | Multiple similar keywords |
| 4 | {"claim_history": "Multiple collide crash scratch bump smash incidents"} | {"risk_rating": 5} | Maximum risk rating |
| 5 | {"claim_history": ""} | {"error": "there is an error"} | Empty claim history |

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run tests:

```bash
npm test
```

4. Start the server:

```bash
npm start
```

## API Usage

### Car Value API

```bash
POST /car-value
Content-Type: application/json

{
    "model": "Civic",
    "year": 2020
}
```

### Risk Rating API

```bash
POST /risk-rating
Content-Type: application/json

{
    "claim_history": "No crashes or incidents in the past 3 years"
}
```

## Project Development Process

1. Implemented TDD methodology for both APIs
2. Created comprehensive test suites
3. Developed API endpoints and business logic
4. Performed code reviews and refactoring
5. Maintained continuous testing throughout development

## Contributors

This project was developed as part of Mission Ready HQ's Advanced Full Stack Developer program by:

- [@riv-k](https://github.com/riv-k) - Rithvik Sharma
- [@Arjan269](https://github.com/Arjan269) - Arjan Petera
