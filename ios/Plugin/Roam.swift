import Foundation

@objc public class Roam: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
